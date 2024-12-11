function layeredPerlin(x, y, options = {}) {
    const {
        octaves = 8,
        persistence = 0.45,
        lacunarity = 2.0, 
        scale = 0.1,
    } = options;

    let amplitude = 1;
    let frequency = 1;
    let noiseValue = 0;

    for (let i = 0; i < octaves; i++) {
        const nx = x * scale * frequency;
        const ny = y * scale * frequency;
        noiseValue += noise.perlin2(nx, ny) * amplitude;
        amplitude *= persistence;
        frequency *= lacunarity;
    }
    if (noiseValue<0){
        noiseValue = noiseValue*3;
    }
    return noiseValue;
}



class PerlinPlane {
    constructor(center = [0, 0, 0], w = 5, h = 5) {
        const numX = 200;
        const numZ = 200;

        const stepX = w / (numX - 1);
        const stepZ = h / (numZ - 1);

        const halfW = w / 2;
        const halfH = h / 2;

        const vertexPos = new Float32Array(numX * numZ * 3);
        const vertexNormals = new Float32Array(numX * numZ * 3);
        const vertexTextureCoords = new Float32Array(numX * numZ * 2);
        const triangleIndices = new Uint16Array((numX - 1) * (numZ - 1) * 6);

        const heightMap = new Array(numZ);
        for (let z = 0; z < numZ; z++) {
            heightMap[z] = new Array(numX);
        }

        let ymin = 10000;
        let ymax = -10000;
        for (let z = 0; z < numZ; z++) {
            for (let x = 0; x < numX; x++) {
                const index = z * numX + x;

                const xPos = center[0] - halfW + x * stepX;
                const zPos = center[2] - halfH + z * stepZ;
                const yPos = layeredPerlin(xPos, zPos) + center[1];

                vertexPos[index * 3] = xPos;
                vertexPos[index * 3 + 1] = yPos;
                vertexPos[index * 3 + 2] = zPos;

                heightMap[z][x] = yPos;

                if(yPos<ymin){ymin = yPos;}
                if(yPos>ymax){ymax = yPos;}

                vertexTextureCoords[index * 2] = x / (numX - 1);
                vertexTextureCoords[index * 2 + 1] = z / (numZ - 1);
            }
        }

        for (let z = 0; z < numZ; z++) {
            for (let x = 0; x < numX; x++) {
                const index = z * numX + x;
                let dx, dz;
                if (x > 0 && x < numX - 1) {
                    dx = (heightMap[z][x + 1] - heightMap[z][x - 1]) / (2 * stepX);
                } else if (x === 0) {
                    dx = (heightMap[z][x + 1] - heightMap[z][x]) / stepX;
                } else {
                    dx = (heightMap[z][x] - heightMap[z][x - 1]) / stepX;
                }
                if (z > 0 && z < numZ - 1) {
                    dz = (heightMap[z + 1][x] - heightMap[z - 1][x]) / (2 * stepZ);
                } else if (z === 0) {
                    dz = (heightMap[z + 1][x] - heightMap[z][x]) / stepZ;
                } else {
                    dz = (heightMap[z][x] - heightMap[z - 1][x]) / stepZ;
                }
                const nx = -dx;
                const ny = 1.0;
                const nz = -dz;

                const length = Math.sqrt(nx * nx + ny * ny + nz * nz);
                vertexNormals[index * 3] = nx / length;
                vertexNormals[index * 3 + 1] = ny / length;
                vertexNormals[index * 3 + 2] = nz / length;
            }
        }

        let idx = 0;
        for (let z = 0; z < numZ - 1; z++) {
            for (let x = 0; x < numX - 1; x++) {
                const topLeft = z * numX + x;
                const topRight = topLeft + 1;
                const bottomLeft = (z + 1) * numX + x;
                const bottomRight = bottomLeft + 1;

                triangleIndices[idx++] = topLeft;
                triangleIndices[idx++] = bottomLeft;
                triangleIndices[idx++] = topRight;

                triangleIndices[idx++] = topRight;
                triangleIndices[idx++] = bottomLeft;
                triangleIndices[idx++] = bottomRight;
            }
        }

        this.vertexPos = vertexPos;
        this.vertexNormals = vertexNormals;
        this.triangleIndices = triangleIndices;
        this.vertexTextureCoords = vertexTextureCoords;
        this.bboxMin = [-halfW, ymin, -halfH];
        this.bboxMax = [halfW, ymax, halfH];
    }
}

class Plane {
    constructor(center = [0, 0, 0], w = 5, h = 5) {
        this.vertexPos = new Float32Array([
            center[0] - w / 2, center[1], center[2] - h / 2,
            center[0] + w / 2, center[1], center[2] - h / 2,
            center[0] + w / 2, center[1], center[2] + h / 2,
            center[0] - w / 2, center[1], center[2] + h / 2,
        ]);
        this.vertexNormals = new Float32Array([
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
        ]);
        this.triangleIndices = new Uint16Array([
            0, 1, 2,
            0, 2, 3
        ]);
        this.vertexTextureCoords = new Float32Array([
            0, 0,
            1, 0,
            1, 1,
            0, 1
        ]);
        this.bboxMin = [-w/2, 0, -h/2];
        this.bboxMax = [w/2, 0, h/2];
    }
}