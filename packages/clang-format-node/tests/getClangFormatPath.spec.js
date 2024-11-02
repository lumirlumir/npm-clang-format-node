const { doesNotThrow, throws } = require('assert');
const getClangFormatPath = require('../src/getClangFormatPath');

// See possible values in https://nodejs.org/api/os.html#osplatform
const osPlatforms = ['aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', 'win32'];
// See possible values in https://nodejs.org/api/os.html#osarch
const architectures = [
  'arm',
  'arm64',
  'ia32',
  'loong64',
  'mips',
  'mipsel',
  'ppc',
  'ppc64',
  'riscv64',
  's390',
  's390x',
  'x64',
];
const allowed = {
  darwin: ['arm64', 'x64'],
  linux: ['arm', 'arm64', 'ppc64', 's390x', 'x64'],
  win32: ['x64'],
};

/**
 * Tests for the `getClangFormatPath`
 */
describe('getClangFormatPath doesNotThrow and throws testing', () => {
  osPlatforms.forEach(osPlatform => {
    architectures.forEach(architecture => {
      it(`osPlatform: ${osPlatform}, architecture: ${architecture}`, () => {
        if (allowed[osPlatform] && allowed[osPlatform].includes(architecture)) {
          doesNotThrow(() => {
            getClangFormatPath(osPlatform, architecture);
          });
        } else {
          throws(() => {
            getClangFormatPath(osPlatform, architecture);
          });
        }
      });
    });
  });
});
