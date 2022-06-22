const { constants } = require("ethers");

const polygonChainLinkOracles = [
  "0x443c5116cdf663eb387e72c688d276e702135c87",
  "0x72484b12719e23115761d5da1646945632979bb6",
  "0x882554df528115a743c4537828da8d5b58e52544",
  "0x3fd911749fce21a38704b76ffabcb6bef2567f2e",
  "0x9b88d07b2354ef5f4579690356818e07371c7bed",
  "0x5db6e61b6159b20f068dc15a47df2e5931b14f29",
  "0x03bc6d9efed65708d35fdaefb25e87631a0a3437",
  "0x289833f252eab98582d62db94bd75ab48ad9cf0d",
  "0xf9184b8e5da48c19fa4e06f83f77742e748cca96",
  "0x2ac3f3bfac8fc9094bc3f0f9041a51375235b992",
  "0x062df9c4efd2030e243ffcc398b652e8b8f95c6f",
  "0xe01ea2fbd8d76ee323fbed03eb9a8625ec981a10",
  "0x9c371ae34509590e10ab98205d2df5936a1ad875",
  "0x82c9d4e88862f194c2bd874a106a90ddd0d35aab",
  "0xf626964ba5e81405f47e8004f0b276bb974742b5",
  "0x03cd157746c61f44597dd54c6f6702105258c722",
  "0xd106b538f2a868c28ca1ec7e298c3325e0251d66",
  "0x2346ce62bd732c62618944e51cbfa09d985d86d2",
  "0x327d9822e9932996f55b39f557aec838313da8b7",
  "0xc5c770ae2efdf0dbc2fb366fb3833dac2a20bf2f",
  "0x82a6c4af830caa6c97bb504425f6a66165c2c26e",
  "0xf5724884b6e99257cc003375e6b844bc776183f9",
  "0x58527c2dcc755297bb81f9334b80b2b6032d8524",
  "0x8803dd6705f0d38e79790b02a2c43594a0538d22",
  "0x19b0f0833c78c0848109e3842d34d2fdf2ca69ba",
  "0xc907e116054ad103354f2d350fd2514433d57f6f",
  "0x18e4058491c3f58bc2f747a9e64ca256ed6b318d",
  "0x2f2c605f28de314bc579a7c0fdf85536529e9825",
  "0xe0dc07d5ed74741ceeda61284ee56a2a0f7a4cc9",
  "0xaca44abb8b04d07d883202f99fa5e3c53ed57fb5",
  "0xc9ecf45956f576681bdc01f79602a79bc2667b0c",
  "0xc76f762cedf0f78a439727861628e0fdfe1e70c2",
  "0x2409987e514ad8b0973c2b90ee1d95051df0ecb9",
  "0xf238a5fb3a15ab4b063b3894fab30442620b70b9",
  "0x04bb437aa63e098236fa47365f0268547f6eab32",
  "0x2a8758b7257102461bc958279054e372c2b1bde6",
  "0xde6302dfa0ac45b2b1b1a23304469da630b2f59b",
  "0x1cf68c76803c9a415be301f50e82e44c64b7f1d4",
  "0x336584c8e6dc19637a5b36206b1c79923111b405",
  "0xe039d4aa72a0c0d6d0218e650c1ebd6b2675a575",
  "0x5ec151834040b4d453a1ea46aa634c1773b36084",
  "0x6a03b6f7a833a8305a532e7f4fc161f470910058",
  "0x99ca59cab16767f40afe385bdd423a309f6ac2c2",
  "0xb3dbea967a5411b8abfb79e4e9d2138b7a7de2e7",
  "0xb4d962106206d88372c542c8ffecacaefb728a60",
  "0xb527769842f997d56dd1ff73c34192141b69077e",
  "0xfc539a559e170f848323e19dfd66007520510085",
  "0x4746dec9e833a82ec7c2c1356372ccf2cfcd2f3d",
  "0xd94427edee70e4991b4b8ddcc848f2b58ed01c0b",
  "0x4205ec5fd179a843caa7b0860a8ec7d980013359",
  "0x59161117086a4c7a9beda16c66e40bdaa1c5a8b6",
  "0xbaf9327b6564454f4a3364c33efeef032b4b4444",
  "0xbd238a35fb47ae22f0cc551f14ffb8e8f04fca21",
  "0xacb51f1a83922632ca02b25a8164c10748001bde",
  "0xc70aaf9092de3a4e5000956e672cdf5e996b4610",
  "0x9be99a22be3a702172da3980aa760365ad8cd7fd",
  "0x392acaa165a882dfc63d3aeb4c446b95fa7013b0",
  "0x440a341bbc9fa86aa60a195e2409a547e48d4c0c",
  "0xd6285f06203d938ab713fa6a315e7d23247dde95",
  "0xdf3f72be10d194b58b1bb56f2c4183e661cb2114",
  "0xf9680d99d6c9589e2a93a78a04a279e509205945",
  "0x67935f65d1577ced9f4929d3679a157e95c1c02c",
  "0x73366fe0aa0ded304479862808e02506fe556a98",
  "0xe7ef3246654ac0fd0e22fc30dce40466cfdf597c",
  "0xdfb138ba3a6cce675a6f5961323be31ee42e40ff",
  "0x5b4586c911144a947d7814fd71fe0872b8334748",
  "0x18617d05ee1692ad7eafee9839459da16097afd8",
  "0x00dbeb1e45485d53df7c2f0df1aa0b6dc30311d3",
  "0x58326c0f831b2dbf7234a4204f28bba79aa06d5f",
  "0x817a7d43f0277ca480ae03ec76fc63a2ec7114ba",
  "0x6c0fe985d3cacbcde428b84fc9431792694d0f51",
  "0x099a2540848573e94fb1ca0fa420b00acbbc845a",
  "0xe638249af9642cda55a92245525268482ee4c67b",
  "0xdd229ce42f11d8ee7fff29bdb71c7b81352e11be",
  "0x432fa0899cf1bcdb98592d7eaa23c372b8b8ddf2",
  "0x1b32682c033b2dd7efdc615fa82d353e254f39b5",
  "0x3fabbfb300b1e2d7c9b84512fe9d30aedf24c410",
  "0xc5878bdf8a89fa3bf0dc8389ae8ee6de601d01bc",
  "0x82d43b72573f902f960126a19581bcbba5b014f5",
  "0x6f8f9e75c0285aece30adfe1bcc1955f145d971a",
  "0x84227a76a04289473057bef706646199d7c58c34",
  "0x80a5cb83ce268ed11a6efc4bbf0bec39df35db21",
  "0x8d5eb34c509261533235b91350d359edcb969d33",
  "0x0052f461a5dc0feef70cabc312c9acb1e4afc0a2",
  "0xd647a6fc9bc6402301583c91decc5989d8bc382d",
  "0x5438e60a06c7447432512264fa57e2fed3224b33",
  "0x86f87cb74238a6f24606534a2fcc05469eb2bcf5",
  "0x10e5f3dfc81b3e5ef4e648c4454d04e79e1e41e2",
  "0x24b820870f726da9b0d83b0b28a93885061dbf50",
  "0x90711d545915f8e99a22bb1f86eb8c0403e3358f",
  "0xb77fa460604b9c6435a235d057f7d319ac83cb53",
  "0x5787befdc0ecd210dfa948264631cd53e68f7802",
  "0xd9ffdb71ebe7496cc440152d43986aae0ab76665",
  "0xbaaf11ceda1d1ca9cf01748f8196653c9656a400",
  "0xeb99f173cf7d9a6dc4d889c2ad7103e8383b6efa",
  "0xa1cbf3fe43bc3501e3fc4b573e822c70e76a7512",
  "0x327e23a4855b6f663a28c5161541d69af8973302",
  "0xab594600376ec9fd91f8e885dadf0ce036862de0",
  "0x6e53c1c22427258be55ae985a65c0c87bb631f9c",
  "0xd133f916e04ed5d67b231183d85be12eaa018320",
  "0xd8d483d813547cfb624b8dc33a00f2fcbcd2d428",
  "0x7d620d05c317a426903596432a5ca83375dc8d2a",
  "0x807b59d12520830d1864286fa0271c27baa94197",
  "0xa070427bf5ba5709f70e98b94cb2f435a242c46c",
  "0xb89d583b72abf9c3a7e6e093251c2fcad3365312",
  "0xc43081d9ea6d1c53f1f0e525504d47dd60de12da",
  "0x171b16562ea3476f5c61d1b8dad031dba0768545",
  "0xee47cf6bf2e58b276b565f73d5c6de5d405a33f5",
  "0x74b3587a23ee786a43c8529c2e98d3c05a8fb1fb",
  "0x666bb13b3ed3816504e8c30d0f9b9c16b371774b",
  "0x0df812c4d675d155815b1216ce1da9e68f1b7050",
  "0x1342a7a1d7264daf8ae790712266c7be19f71211",
  "0xa302a0b8a499fd0f00449df0a490dede21105955",
  "0xdcda79097c44353dee65684328793695bd34a629",
  "0xa8b05b6337040c0529919bdb51f6b40a684eb08c",
  "0xc08f70c26ab8c659eaf259c51a0f7ae22758c6ac",
  "0x4ce90f28c6357a7d3f47d680723d18af3684cd00",
  "0x93ffee768f74208a7b9f2a4426f0f6bcbb1d09de",
  "0x0e12b79a6e5c919f89246ededb2d6413a8890a54",
  "0x56d55d34ecc616e71ae998accba79f236ff2ff46",
  "0x0f6914d8e7e1214cdb3a4c6fbf729b75c69df608",
  "0x218231089bebb2a31970c3b77e96ecfb3ba006d1",
  "0xd3963855b73979b617455fc38a7355563a289948",
  "0x24c0e0fc8ccb21e2fb3e1a8a4ec4b29458664f79",
  "0xb34bce11040702f71c11529d00179b2959bce6c0",
  "0xc741f7752bae936fce97933b755884af66fb69c1",
  "0xdcc714619e59a626fde5f082d42f314e9fb832fb",
  "0x836a579b39d22b2147c1c229920d27880c915578",
  "0xa058689f4bca95208bba3f265674ae95ded75b6d",
  "0x7f45273fd7c644714825345670414ea649b50b16",
  "0x634b084372f88848ac8f8006dc178aa810a58e89",
  "0x3fcef3edf17f515d9c0fa72020fcfc6c0001f876",
  "0x2e5b04adc0a3b7db5fd34ae817c7d0993315a8a6",
  "0x3d49406edd4d52fb7ffd25485f32e073b529c924",
  "0x5047cdcf17aa5a0bb77217497142657b27a1e228",
  "0xcc73e00db7a6fd589a30bbe2e957086b8d7d3331",
  "0xbd92b4919ae82be8473859295def0e778a626302",
  "0x8ce3cac0e6635ce04783709ca3cc4f5fc5304299",
  "0x3710abeb1a0fc7c2ec59c26c8daa7a448ff6125a",
  "0xbb3ef70953fc3766bec4ab7a9bf05b6e4caf89c6",
  "0xbf90a5d9b6ee9019028dbfc2a9e50056d5252894",
  "0x10c8264c0935b3b9870013e057f330ff3e9c56dc",
  "0xd8f8a7a38a1ac326312000d0a0218bf3216bfabb",
  "0x17414eb5159a082e8d41d243c1601c2944401431",
  "0x49b0c695039243bbfeb8ecd054eb70061fd54aa0",
  "0x80fdfcd7b923d4332dc053bf2e23e3e36d12bba4",
  "0x38611b09f8f2d520c14ea973765c225bf57b9eac",
  "0x9bce696fb0dce1ed4ddb94305757dedc745f3786",
  "0x346c7d75e315b54129eac38cc4e2b9f9b0250e3e",
  "0x307ccf7cbd17b69a487b9c3dbe483931cf3e1833",
  "0xd78325dca0f90f0ffe53ccea1b02bb12e1bf8fdb",
  "0x567e67f456c7453c583b6efa6f18452cdee1f5a8",
  "0x7c5d415b64312d38c56b54358449d0a4058339d2",
  "0xe6d13ef6fb49230791c0f21927f091f2b8e2c566",
  "0xbb9749b5ad68574c106ac4f9cd5e1c400dbb88c3",
  "0x33d9b1baadcf4b26ab6f8e83e9cb8a611b2b3956",
  "0x162d8c5bf15eb6bee003a1ffc4049c92114bc931",
  "0xdf0fb4e4f928d2dcb76f438575fdd8682386e13c",
  "0xefb7e6be8356ccc6827799b6a7348ee674a80eae",
  "0xfe4a8cc5b5b2366c1b58bea3858e81843581b2f7",
  "0xf9d5aac6e5572aefa6bd64108ff86a222f69b64d",
  "0x0a6513e40db6eb1b165753ad52e80663aea50545",
  "0xd78bc11ef3256e3ce9dc0df0fa7be9e9afc07f95",
  "0x0cf1d8c6651f4188e55fce6ab25261948108f197",
  "0xa338e0492b2f944e9f8c0653d3ad1484f2657a37",
  "0xde31f8bfbd8c84b5360cfacca3539b938dd78ae6",
  "0x6a99ec84819fb7007dd5d032068742604e755c56",
  "0x461c7b8d370a240ddb46b402748381c3210136b3",
  "0x0c466540b2ee1a31b441671eac0ca886e051e410",
  "0x692ae5510ca9070095a496dbcfbcda99d4024cd9",
  "0xbe6fb0ab6302b693368d0e9001faf77ecc6571db",
  "0x34108d18dcb16cfe4ea8930a5fec16deb7b4e383",
  "0x785ba89291f676b5386652eb12b30cf361020694",
  "0xc16cb62cdde46f43fd73257b957bf527f07b51c0",
  "0x691e26ab58ff05800e028b0876a41b720b26fc65",
  "0x9896a1ea7a00f5f32ab131ebbee07487b0af31d0",
  "0x9d3a43c111e7b2c6601705d9fcf7a70c95b1dc55",
  "0xd4a120c26d57b910c56c910cdd13eebfa3135502",
  "0xbc08c639e579a391c4228f20d0c29d0690092df0",
  "0x6ea4d89474d9410939d429b786208c74853a5b47",
];

exports.constants = { polygonChainLinkOracles };