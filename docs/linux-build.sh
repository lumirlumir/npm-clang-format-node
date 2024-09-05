sudo apt update -y
sudo apt install -y git python3 g++ cmake ninja-build

# Replace llvmorg-18.1.8 with your desired version. Check the tags at https://github.com/llvm/llvm-project/tags
git clone --depth 1 --branch llvmorg-18.1.8 https://github.com/llvm/llvm-project.git
cd llvm-project

cmake -S llvm -B build-linux-x64 -G Ninja \
  -DLLVM_ENABLE_PROJECTS="clang" \
  -DCMAKE_BUILD_TYPE=MinSizeRel \

ninja -C build clang-format

# Check clang-format version
build/bin/clang-format --version
