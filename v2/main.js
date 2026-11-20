/* UXPA NYC — interactions recreated from the Figma prototype. */

const GRID = {
  hero: {
    rects: [[0,0,48,240,"64b32c","61b334"],[48,0,48,240,"64b32c","5ab441"],[96,0,48,240,"5eb339","54b44f"],[144,0,48,240,"58b447","4eb55d"],[192,0,48,240,"52b555","48b56b"],[240,0,48,240,"4bb563","41b679"],[288,0,48,240,"45b671","3bb687"],[336,0,48,240,"3fb67e","35b795"],[384,0,48,240,"39b78c","2fb7a2"],[432,0,48,240,"33b79a","29b8b0"],[480,0,48,240,"2cb8a8","22b8be"],[528,0,48,240,"26b8b6","1cb9cc"],[576,0,48,240,"20b9c4","16bada"],[624,0,48,240,"1ab9d2","10b9e7"],[672,0,48,240,"13badf","0eaee1"],[720,0,48,240,"0fb5e4","0da2db"],[768,0,48,240,"0ea9df","0c97d5"],[816,0,48,240,"0c9ed9","0a8bcf"],[864,0,48,240,"0b92d3","097fc9"],[912,0,48,240,"0a86cd","0774c4"],[960,0,48,240,"087bc7","0668be"],[1008,0,48,240,"076fc1","045cb8"],[1056,0,48,240,"0563bb","0351b2"],[1104,0,48,240,"0458b6","0245ac"],[1152,0,48,240,"024cb0","003aa6"],[1200,0,48,240,"0141aa","0039a6"],[1248,0,48,240,"0039a6","0039a6"],[1296,0,48,240,"0039a6","0039a6"],[1344,0,48,240,"0039a6","0039a6"],[1392,0,48,240,"0039a6","0039a6"],[0,240,48,240,"64b32c","5ab442"],[48,240,48,240,"5eb43a","54b450"],[96,240,48,240,"58b448","4eb55e"],[144,240,48,240,"51b556","47b56c"],[192,240,48,240,"4bb563","41b67a"],[240,240,48,240,"45b671","3bb687"],[288,240,48,240,"3fb67f","35b795"],[336,240,48,240,"38b78d","2eb7a3"],[384,240,48,240,"32b79b","28b8b1"],[432,240,48,240,"2cb8a9","22b8bf"],[480,240,48,240,"26b8b7","1cb9cd"],[528,240,48,240,"20b9c4","16badb"],[576,240,48,240,"19b9d2","10b9e6"],[624,240,48,240,"13bae0","0eade1"],[672,240,48,240,"0fb4e4","0da2db"],[720,240,48,240,"0ea9de","0c96d5"],[768,240,48,240,"0c9dd8","0a8acf"],[816,240,48,240,"0b91d3","097fc9"],[864,240,48,240,"0a86cd","0773c3"],[912,240,48,240,"087ac7","0667bd"],[960,240,48,240,"076ec1","045cb8"],[1008,240,48,240,"0563bb","0350b2"],[1056,240,48,240,"0457b5","0145ac"],[1104,240,48,240,"024caf","0039a6"],[1152,240,48,240,"0140aa","0039a6"],[1200,240,48,240,"0039a6","0039a6"],[1248,240,48,240,"0039a6","0039a6"],[1296,240,48,240,"0039a6","0039a6"],[1344,240,48,240,"0039a6","0039a6"],[1392,240,48,240,"0039a6","0039a6"]],
    whites: [[0,336],[480,336],[624,336],[816,336],[1056,336],[1200,336],[1344,336],[0,384],[192,384],[288,384],[336,384],[432,384],[528,384],[864,384],[1008,384],[1152,384],[1200,384],[1296,384],[1392,384],[0,432],[48,432],[96,432],[192,432],[240,432],[288,432],[384,432],[432,432],[480,432],[528,432],[576,432],[624,432],[672,432],[768,432],[816,432],[864,432],[912,432],[960,432],[1104,432],[1152,432],[1200,432],[1344,432]],
    tiles: [[0,0,"0f3c9e"],[48,0,"0f3c9e"],[96,0,"2d428d"],[144,0,"2d428d"],[192,0,"4a477c"],[240,0,"4a477c"],[1152,0,"f0af39"],[1200,0,"f0af39"],[1248,0,"f4be3c"],[1296,0,"f4be3c"],[1344,0,"f7cd3f"],[1392,0,"f7cd3f"],[0,48,"0f3c9e"],[48,48,"0f3c9e"],[96,48,"2d428d"],[144,48,"2d428d"],[192,48,"4a477c"],[240,48,"4a477c"],[1152,48,"f0af39"],[1200,48,"f0af39"],[1248,48,"f4be3c"],[1296,48,"f4be3c"],[1344,48,"f7cd3f"],[1392,48,"f7cd3f"],[0,96,"0f3c9e"],[0,288,"0f3c9e"],[48,96,"0f3c9e"],[48,288,"0f3c9e"],[96,96,"2d428d"],[96,288,"2d428d"],[144,96,"2d428d"],[144,288,"2d428d"],[192,96,"4a477c"],[192,288,"4a477c"],[240,96,"4a477c"],[240,288,"4a477c"],[288,96,"684d6c"],[288,288,"684d6c"],[336,96,"684d6c"],[336,288,"684d6c"],[384,96,"86535b"],[384,288,"86535b"],[432,96,"86535b"],[432,288,"86535b"],[480,96,"a4594a"],[480,288,"a4594a"],[528,96,"a4594a"],[528,288,"a4594a"],[576,96,"c15e3a"],[576,288,"c15e3a"],[624,96,"c15e3a"],[624,288,"c15e3a"],[672,96,"df6429"],[672,288,"df6429"],[720,96,"df6429"],[720,288,"df6429"],[768,96,"e2732c"],[768,288,"e2732c"],[816,96,"e2732c"],[816,288,"e2732c"],[864,96,"e6822f"],[864,288,"e6822f"],[912,96,"e6822f"],[912,288,"e6822f"],[960,96,"e99133"],[960,288,"e99133"],[1008,96,"e99133"],[1008,288,"e99133"],[1056,96,"eda036"],[1056,288,"eda036"],[1104,96,"eda036"],[1104,288,"eda036"],[1152,96,"f0af39"],[1152,288,"f0af39"],[1200,96,"f0af39"],[1200,288,"f0af39"],[1248,96,"f4be3c"],[1248,288,"f4be3c"],[1296,96,"f4be3c"],[1296,288,"f4be3c"],[1344,96,"f7cd3f"],[1344,288,"f7cd3f"],[1392,96,"f7cd3f"],[1392,288,"f7cd3f"],[0,144,"0f3c9e"],[0,336,"0f3c9e"],[48,144,"0f3c9e"],[48,336,"0f3c9e"],[96,144,"2d428d"],[96,336,"2d428d"],[144,144,"2d428d"],[144,336,"2d428d"],[192,144,"4a477c"],[192,336,"4a477c"],[240,144,"4a477c"],[240,336,"4a477c"],[288,144,"684d6c"],[288,336,"684d6c"],[336,144,"684d6c"],[336,336,"684d6c"],[384,144,"86535b"],[384,336,"86535b"],[432,144,"86535b"],[432,336,"86535b"],[480,144,"a4594a"],[480,336,"a4594a"],[528,144,"a4594a"],[528,336,"a4594a"],[576,144,"c15e3a"],[576,336,"c15e3a"],[624,144,"c15e3a"],[624,336,"c15e3a"],[672,144,"df6429"],[672,336,"df6429"],[720,144,"df6429"],[720,336,"df6429"],[768,144,"e2732c"],[768,336,"e2732c"],[816,144,"e2732c"],[816,336,"e2732c"],[864,144,"e6822f"],[864,336,"e6822f"],[912,144,"e6822f"],[912,336,"e6822f"],[960,144,"e99133"],[960,336,"e99133"],[1008,144,"e99133"],[1008,336,"e99133"],[1056,144,"eda036"],[1056,336,"eda036"],[1104,144,"eda036"],[1104,336,"eda036"],[1152,144,"f0af39"],[1152,336,"f0af39"],[1200,144,"f0af39"],[1200,336,"f0af39"],[1248,144,"f4be3c"],[1248,336,"f4be3c"],[1296,144,"f4be3c"],[1296,336,"f4be3c"],[1344,144,"f7cd3f"],[1344,336,"f7cd3f"],[1392,144,"f7cd3f"],[1392,336,"f7cd3f"],[0,192,"0f3c9e"],[0,384,"0f3c9e"],[48,192,"0f3c9e"],[48,384,"0f3c9e"],[96,192,"2d428d"],[96,384,"2d428d"],[144,192,"2d428d"],[144,384,"2d428d"],[192,192,"4a477c"],[192,384,"4a477c"],[240,192,"4a477c"],[240,384,"4a477c"],[288,192,"684d6c"],[288,384,"684d6c"],[336,192,"684d6c"],[336,384,"684d6c"],[384,192,"86535b"],[384,384,"86535b"],[432,192,"86535b"],[432,384,"86535b"],[480,192,"a4594a"],[480,384,"a4594a"],[528,192,"a4594a"],[528,384,"a4594a"],[576,192,"c15e3a"],[576,384,"c15e3a"],[624,192,"c15e3a"],[624,384,"c15e3a"],[672,192,"df6429"],[672,384,"df6429"],[720,192,"df6429"],[720,384,"df6429"],[768,192,"e2732c"],[768,384,"e2732c"],[816,192,"e2732c"],[816,384,"e2732c"],[864,192,"e6822f"],[864,384,"e6822f"],[912,192,"e6822f"],[912,384,"e6822f"],[960,192,"e99133"],[960,384,"e99133"],[1008,192,"e99133"],[1008,384,"e99133"],[1056,192,"eda036"],[1056,384,"eda036"],[1104,192,"eda036"],[1104,384,"eda036"],[1152,192,"f0af39"],[1152,384,"f0af39"],[1200,192,"f0af39"],[1200,384,"f0af39"],[1248,192,"f4be3c"],[1248,384,"f4be3c"],[1296,192,"f4be3c"],[1296,384,"f4be3c"],[1344,192,"f7cd3f"],[1344,384,"f7cd3f"],[1392,192,"f7cd3f"],[1392,384,"f7cd3f"],[0,240,"0f3c9e"],[0,432,"0f3c9e"],[48,240,"0f3c9e"],[48,432,"0f3c9e"],[96,240,"2d428d"],[96,432,"2d428d"],[144,240,"2d428d"],[144,432,"2d428d"],[192,240,"4a477c"],[192,432,"4a477c"],[240,240,"4a477c"],[240,432,"4a477c"],[288,240,"684d6c"],[288,432,"684d6c"],[336,240,"684d6c"],[336,432,"684d6c"],[384,240,"86535b"],[384,432,"86535b"],[432,240,"86535b"],[432,432,"86535b"],[480,240,"a4594a"],[480,432,"a4594a"],[528,240,"a4594a"],[528,432,"a4594a"],[576,240,"c15e3a"],[576,432,"c15e3a"],[624,240,"c15e3a"],[624,432,"c15e3a"],[672,240,"df6429"],[672,432,"df6429"],[720,240,"df6429"],[720,432,"df6429"],[768,240,"e2732c"],[768,432,"e2732c"],[816,240,"e2732c"],[816,432,"e2732c"],[864,240,"e6822f"],[864,432,"e6822f"],[912,240,"e6822f"],[912,432,"e6822f"],[960,240,"e99133"],[960,432,"e99133"],[1008,240,"e99133"],[1008,432,"e99133"],[1056,240,"eda036"],[1056,432,"eda036"],[1104,240,"eda036"],[1104,432,"eda036"],[1152,240,"f0af39"],[1152,432,"f0af39"],[1200,240,"f0af39"],[1200,432,"f0af39"],[1248,240,"f4be3c"],[1248,432,"f4be3c"],[1296,240,"f4be3c"],[1296,432,"f4be3c"],[1344,240,"f7cd3f"],[1344,432,"f7cd3f"],[1392,240,"f7cd3f"],[1392,432,"f7cd3f"]]
  },
  foot: {
    rects: [[0,240,48,240,"64b32c","61b334"],[48,240,48,240,"64b32c","5ab441"],[96,240,48,240,"5eb339","54b44f"],[144,240,48,240,"58b447","4eb55d"],[192,240,48,240,"52b555","48b56b"],[240,240,48,240,"4bb563","41b679"],[288,240,48,240,"45b671","3bb687"],[336,240,48,240,"3fb67e","35b795"],[384,240,48,240,"39b78c","2fb7a2"],[432,240,48,240,"33b79a","29b8b0"],[480,240,48,240,"2cb8a8","22b8be"],[528,240,48,240,"26b8b6","1cb9cc"],[576,240,48,240,"20b9c4","16bada"],[624,240,48,240,"1ab9d2","10b9e7"],[672,240,48,240,"13badf","0eaee1"],[720,240,48,240,"0fb5e4","0da2db"],[768,240,48,240,"0ea9df","0c97d5"],[816,240,48,240,"0c9ed9","0a8bcf"],[864,240,48,240,"0b92d3","097fc9"],[912,240,48,240,"0a86cd","0774c4"],[960,240,48,240,"087bc7","0668be"],[1008,240,48,240,"076fc1","045cb8"],[1056,240,48,240,"0563bb","0351b2"],[1104,240,48,240,"0458b6","0245ac"],[1152,240,48,240,"024cb0","003aa6"],[1200,240,48,240,"0141aa","0039a6"],[1248,240,48,240,"0039a6","0039a6"],[1296,240,48,240,"0039a6","0039a6"],[1344,240,48,240,"0039a6","0039a6"],[1392,240,48,240,"0039a6","0039a6"],[0,144,48,48,"64b32c","5ab442"],[0,192,48,48,"64b32c","5ab442"],[48,48,48,48,"5eb43a","54b450"],[48,96,48,48,"5eb43a","54b450"],[48,144,48,48,"5eb43a","54b450"],[48,192,48,48,"5eb43a","54b450"],[96,48,48,48,"58b448","4eb55e"],[96,96,48,48,"58b448","4eb55e"],[96,144,48,48,"58b448","4eb55e"],[96,192,48,48,"58b448","4eb55e"],[144,0,48,48,"51b556","47b56c"],[144,48,48,48,"51b556","47b56c"],[144,96,48,48,"51b556","47b56c"],[144,144,48,48,"51b556","47b56c"],[144,192,48,48,"51b556","47b56c"],[192,96,48,48,"4bb563","41b67a"],[192,144,48,48,"4bb563","41b67a"],[192,192,48,48,"4bb563","41b67a"],[240,48,48,48,"45b671","3bb687"],[240,96,48,48,"45b671","3bb687"],[240,144,48,48,"45b671","3bb687"],[240,192,48,48,"45b671","3bb687"],[288,96,48,48,"3fb67f","35b795"],[288,144,48,48,"3fb67f","35b795"],[288,192,48,48,"3fb67f","35b795"],[336,0,48,48,"38b78d","2eb7a3"],[336,96,48,48,"38b78d","2eb7a3"],[336,144,48,48,"38b78d","2eb7a3"],[336,192,48,48,"38b78d","2eb7a3"],[384,48,48,48,"32b79b","28b8b1"],[384,96,48,48,"32b79b","28b8b1"],[384,144,48,48,"32b79b","28b8b1"],[384,192,48,48,"32b79b","28b8b1"],[432,96,48,48,"2cb8a9","22b8bf"],[432,144,48,48,"2cb8a9","22b8bf"],[432,192,48,48,"2cb8a9","22b8bf"],[480,48,48,48,"26b8b7","1cb9cd"],[480,144,48,48,"26b8b7","1cb9cd"],[480,192,48,48,"26b8b7","1cb9cd"],[528,96,48,48,"20b9c4","16badb"],[528,144,48,48,"20b9c4","16badb"],[528,192,48,48,"20b9c4","16badb"],[576,48,48,48,"19b9d2","10b9e6"],[576,96,48,48,"19b9d2","10b9e6"],[576,144,48,48,"19b9d2","10b9e6"],[576,192,48,48,"19b9d2","10b9e6"],[624,48,48,48,"13bae0","0eade1"],[624,144,48,48,"13bae0","0eade1"],[624,192,48,48,"13bae0","0eade1"],[672,48,48,48,"0fb4e4","0da2db"],[672,96,48,48,"0fb4e4","0da2db"],[672,144,48,48,"0fb4e4","0da2db"],[672,192,48,48,"0fb4e4","0da2db"],[720,0,48,48,"0ea9de","0c96d5"],[720,48,48,48,"0ea9de","0c96d5"],[720,96,48,48,"0ea9de","0c96d5"],[720,144,48,48,"0ea9de","0c96d5"],[720,192,48,48,"0ea9de","0c96d5"],[768,48,48,48,"0c9dd8","0a8acf"],[768,96,48,48,"0c9dd8","0a8acf"],[768,144,48,48,"0c9dd8","0a8acf"],[768,192,48,48,"0c9dd8","0a8acf"],[816,48,48,48,"0b91d3","097fc9"],[816,144,48,48,"0b91d3","097fc9"],[816,192,48,48,"0b91d3","097fc9"],[864,96,48,48,"0a86cd","0773c3"],[864,144,48,48,"0a86cd","0773c3"],[864,192,48,48,"0a86cd","0773c3"],[912,48,48,48,"087ac7","0667bd"],[912,96,48,48,"087ac7","0667bd"],[912,144,48,48,"087ac7","0667bd"],[912,192,48,48,"087ac7","0667bd"],[960,48,48,48,"076ec1","045cb8"],[960,96,48,48,"076ec1","045cb8"],[960,144,48,48,"076ec1","045cb8"],[960,192,48,48,"076ec1","045cb8"],[1008,0,48,48,"0563bb","0350b2"],[1008,96,48,48,"0563bb","0350b2"],[1008,144,48,48,"0563bb","0350b2"],[1008,192,48,48,"0563bb","0350b2"],[1056,0,48,48,"0457b5","0145ac"],[1056,48,48,48,"0457b5","0145ac"],[1056,144,48,48,"0457b5","0145ac"],[1056,192,48,48,"0457b5","0145ac"],[1104,48,48,48,"024caf","0039a6"],[1104,96,48,48,"024caf","0039a6"],[1104,144,48,48,"024caf","0039a6"],[1104,192,48,48,"024caf","0039a6"],[1152,96,48,48,"0140aa","0039a6"],[1152,144,48,48,"0140aa","0039a6"],[1152,192,48,48,"0140aa","0039a6"],[1200,144,48,48,"0039a6","0039a6"],[1200,192,48,48,"0039a6","0039a6"],[1248,0,48,48,"0039a6","0039a6"],[1248,48,48,48,"0039a6","0039a6"],[1248,96,48,48,"0039a6","0039a6"],[1248,144,48,48,"0039a6","0039a6"],[1248,192,48,48,"0039a6","0039a6"],[1296,0,48,48,"0039a6","0039a6"],[1296,96,48,48,"0039a6","0039a6"],[1296,144,48,48,"0039a6","0039a6"],[1296,192,48,48,"0039a6","0039a6"],[1344,48,48,48,"0039a6","0039a6"],[1344,144,48,48,"0039a6","0039a6"],[1344,192,48,48,"0039a6","0039a6"],[1392,0,48,48,"0039a6","0039a6"],[1392,96,48,48,"0039a6","0039a6"],[1392,144,48,48,"0039a6","0039a6"],[1392,192,48,48,"0039a6","0039a6"]],
    whites: [],
    tiles: [[0,432,"0f3c9e"],[48,432,"0f3c9e"],[96,432,"2d428d"],[144,432,"2d428d"],[192,432,"4a477c"],[240,432,"4a477c"],[1152,432,"f0af39"],[1200,432,"f0af39"],[1248,432,"f4be3c"],[1296,432,"f4be3c"],[1344,432,"f7cd3f"],[1392,432,"f7cd3f"],[0,384,"0f3c9e"],[48,384,"0f3c9e"],[96,384,"2d428d"],[144,384,"2d428d"],[192,384,"4a477c"],[240,384,"4a477c"],[1152,384,"f0af39"],[1200,384,"f0af39"],[1248,384,"f4be3c"],[1296,384,"f4be3c"],[1344,384,"f7cd3f"],[1392,384,"f7cd3f"],[0,336,"0f3c9e"],[0,144,"0f3c9e"],[48,336,"0f3c9e"],[48,144,"0f3c9e"],[96,336,"2d428d"],[96,144,"2d428d"],[144,336,"2d428d"],[144,144,"2d428d"],[192,336,"4a477c"],[192,144,"4a477c"],[240,336,"4a477c"],[240,144,"4a477c"],[288,336,"684d6c"],[288,144,"684d6c"],[336,336,"684d6c"],[336,144,"684d6c"],[384,336,"86535b"],[384,144,"86535b"],[432,336,"86535b"],[432,144,"86535b"],[480,336,"a4594a"],[480,144,"a4594a"],[528,336,"a4594a"],[528,144,"a4594a"],[576,336,"c15e3a"],[576,144,"c15e3a"],[624,336,"c15e3a"],[624,144,"c15e3a"],[672,336,"df6429"],[672,144,"df6429"],[720,336,"df6429"],[720,144,"df6429"],[768,336,"e2732c"],[768,144,"e2732c"],[816,336,"e2732c"],[816,144,"e2732c"],[864,336,"e6822f"],[864,144,"e6822f"],[912,336,"e6822f"],[912,144,"e6822f"],[960,336,"e99133"],[960,144,"e99133"],[1008,336,"e99133"],[1008,144,"e99133"],[1056,336,"eda036"],[1056,144,"eda036"],[1104,336,"eda036"],[1104,144,"eda036"],[1152,336,"f0af39"],[1152,144,"f0af39"],[1200,336,"f0af39"],[1200,144,"f0af39"],[1248,336,"f4be3c"],[1248,144,"f4be3c"],[1296,336,"f4be3c"],[1296,144,"f4be3c"],[1344,336,"f7cd3f"],[1344,144,"f7cd3f"],[1392,336,"f7cd3f"],[1392,144,"f7cd3f"],[0,288,"0f3c9e"],[48,288,"0f3c9e"],[48,96,"0f3c9e"],[96,288,"2d428d"],[96,96,"2d428d"],[144,288,"2d428d"],[144,96,"2d428d"],[192,288,"4a477c"],[192,96,"4a477c"],[240,288,"4a477c"],[240,96,"4a477c"],[288,288,"684d6c"],[288,96,"684d6c"],[336,288,"684d6c"],[336,96,"684d6c"],[384,288,"86535b"],[384,96,"86535b"],[432,288,"86535b"],[432,96,"86535b"],[480,288,"a4594a"],[528,288,"a4594a"],[528,96,"a4594a"],[576,288,"c15e3a"],[576,96,"c15e3a"],[624,288,"c15e3a"],[672,288,"df6429"],[672,96,"df6429"],[720,288,"df6429"],[720,96,"df6429"],[768,288,"e2732c"],[768,96,"e2732c"],[816,288,"e2732c"],[864,288,"e6822f"],[864,96,"e6822f"],[912,288,"e6822f"],[912,96,"e6822f"],[960,288,"e99133"],[960,96,"e99133"],[1008,288,"e99133"],[1008,96,"e99133"],[1056,288,"eda036"],[1104,288,"eda036"],[1104,96,"eda036"],[1152,288,"f0af39"],[1152,96,"f0af39"],[1200,288,"f0af39"],[1248,288,"f4be3c"],[1248,96,"f4be3c"],[1296,288,"f4be3c"],[1296,96,"f4be3c"],[1344,288,"f7cd3f"],[1392,288,"f7cd3f"],[1392,96,"f7cd3f"],[0,240,"0f3c9e"],[48,240,"0f3c9e"],[48,48,"0f3c9e"],[96,240,"2d428d"],[96,48,"2d428d"],[144,240,"2d428d"],[144,48,"2d428d"],[192,240,"4a477c"],[240,240,"4a477c"],[240,48,"4a477c"],[288,240,"684d6c"],[336,240,"684d6c"],[384,240,"86535b"],[384,48,"86535b"],[432,240,"86535b"],[480,240,"a4594a"],[480,48,"a4594a"],[528,240,"a4594a"],[576,240,"c15e3a"],[576,48,"c15e3a"],[624,240,"c15e3a"],[624,48,"c15e3a"],[672,240,"df6429"],[672,48,"df6429"],[720,240,"df6429"],[720,48,"df6429"],[768,240,"e2732c"],[768,48,"e2732c"],[816,240,"e2732c"],[816,48,"e2732c"],[864,240,"e6822f"],[912,240,"e6822f"],[912,48,"e6822f"],[960,240,"e99133"],[960,48,"e99133"],[1008,240,"e99133"],[1056,240,"eda036"],[1056,48,"eda036"],[1104,240,"eda036"],[1104,48,"eda036"],[1152,240,"f0af39"],[1200,240,"f0af39"],[1248,240,"f4be3c"],[1248,48,"f4be3c"],[1296,240,"f4be3c"],[1344,240,"f7cd3f"],[1344,48,"f7cd3f"],[1392,240,"f7cd3f"],[0,192,"0f3c9e"],[48,192,"0f3c9e"],[96,192,"2d428d"],[144,192,"2d428d"],[144,0,"2d428d"],[192,192,"4a477c"],[240,192,"4a477c"],[288,192,"684d6c"],[336,192,"684d6c"],[336,0,"684d6c"],[384,192,"86535b"],[432,192,"86535b"],[480,192,"a4594a"],[528,192,"a4594a"],[576,192,"c15e3a"],[624,192,"c15e3a"],[672,192,"df6429"],[720,192,"df6429"],[720,0,"df6429"],[768,192,"e2732c"],[816,192,"e2732c"],[864,192,"e6822f"],[912,192,"e6822f"],[960,192,"e99133"],[1008,192,"e99133"],[1008,0,"e99133"],[1056,192,"eda036"],[1056,0,"eda036"],[1104,192,"eda036"],[1152,192,"f0af39"],[1200,192,"f0af39"],[1248,192,"f4be3c"],[1248,0,"f4be3c"],[1296,192,"f4be3c"],[1296,0,"f4be3c"],[1344,192,"f7cd3f"],[1392,192,"f7cd3f"],[1392,0,"f7cd3f"]]
  }
};

/* ---------------------------------------------------------
   Colour grids (hero + footer)
   GRID holds the 30-column Figma grid:
     rects:  [x, y, w, h, startHex, endHex]  left→right gradient
     whites: [x, y]                           48×48 white "pixel fade" squares
     tiles:  [x, y, hoverHex]                 48×48 hover tiles
   The grid is redrawn with as many columns as the window needs
   (cells are 48px × --grid-scale). At 30 full-size columns (1440px)
   the output is identical to Figma; other widths resample the pattern
   and keep the gradient continuous. The hero's top stripes extend
   upward so a scaled-down grid still fills the hero.
   --------------------------------------------------------- */
const CELL = 48;
const SRC_COLS = 30;

const hexToRgb = h => [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16));
const rgbToHex = c => c.map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
const mix = (a, b, t) => rgbToHex(hexToRgb(a).map((v, i) => v + (hexToRgb(b)[i] - v) * t));

function indexGrid(data) {
  const cols = Array.from({ length: SRC_COLS }, () => ({ rects: [], whites: [], tiles: [] }));
  const stripeRows = {};                         // y → [col] = [c0, c1] for the full-height stripes
  for (const [x, y, w, h, c0, c1] of data.rects) {
    const col = x / CELL;
    cols[col].rects.push({ y, h, c0, c1 });
    if (h === 240) (stripeRows[y] ||= [])[col] = [c0, c1];
  }
  for (const [x, y] of data.whites) cols[x / CELL].whites.push(y);
  for (const [x, y, c] of data.tiles) cols[x / CELL].tiles.push({ y, c });
  return { cols, stripeRows };
}

// Colour of a stripe row at source position x (0–30). `end` picks the
// column to the left when x lands exactly on a column boundary.
function stripeColor(row, x, end) {
  let k = end ? Math.ceil(x) - 1 : Math.floor(x);
  k = Math.min(SRC_COLS - 1, Math.max(0, k));
  const [c0, c1] = row[k];
  return mix(c0, c1, Math.min(1, Math.max(0, x - k)));
}

// extendTop: source px the top stripes reach above the grid (hero only).
// fullTiles: every visible square gets a hover tile (hero with the hamburger menu),
//            instead of only the tiles placed in Figma.
function renderGrid(el, index, extendTop, fullTiles) {
  const scale = parseFloat(getComputedStyle(el).getPropertyValue('--grid-scale')) || 1;
  const n = Math.max(1, Math.ceil(el.clientWidth / (CELL * scale)));
  const key = `${n}@${scale}@${fullTiles}`;
  if (el.dataset.layout === key) return;
  el.dataset.layout = key;

  const inner = document.createElement('div');
  inner.className = 'grid-inner';
  inner.style.width = `${n * CELL}px`;
  inner.style.marginLeft = `${-n * CELL / 2}px`;

  let html = '';
  for (let i = 0; i < n; i++) {
    const x0 = (i * SRC_COLS) / n;
    const x1 = ((i + 1) * SRC_COLS) / n;
    const s = Math.min(SRC_COLS - 1, Math.floor(((i + 0.5) * SRC_COLS) / n));
    const left = i * CELL;
    for (const r of index.cols[s].rects) {
      let a, b;
      if (r.h === 240) {
        const row = index.stripeRows[r.y];
        a = stripeColor(row, x0, false);
        b = stripeColor(row, x1, true);
      } else {                                   // single 48px piece: its own gradient
        a = mix(r.c0, r.c1, Math.min(1, Math.max(0, x0 - s)));
        b = mix(r.c0, r.c1, Math.min(1, Math.max(0, x1 - s)));
      }
      const top = extendTop && r.y === 0 ? -extendTop : r.y;
      html += `<div style="left:${left}px;top:${top}px;height:${r.h + r.y - top}px;background:linear-gradient(90deg,#${a},#${b})"></div>`;
    }
    for (const y of index.cols[s].whites) html += `<div class="white" style="left:${left}px;top:${y}px"></div>`;
    if (fullTiles) {
      const c = index.cols[s].tiles[0].c;        // the column's hover colour
      for (let y = -extendTop; y < 480; y += CELL) html += `<div class="tile" style="left:${left}px;top:${y}px;--c:#${c}"></div>`;
    } else {
      for (const t of index.cols[s].tiles) html += `<div class="tile" style="left:${left}px;top:${t.y}px;--c:#${t.c}"></div>`;
    }
  }
  inner.innerHTML = html;
  el.replaceChildren(inner);
}

(() => {
  const grids = [...document.querySelectorAll('[data-grid]')].map(el => ({ el, index: indexGrid(GRID[el.dataset.grid]) }));
  const hamburger = window.matchMedia('(max-width: 960px)');
  const blockers = [document.querySelector('.logo'), document.querySelector('.menu-toggle')];

  // With the hamburger layout, switch off the hero tiles sitting behind the logo and menu button
  const blockTiles = () => {
    const hero = grids.find(g => g.el.dataset.grid === 'hero').el;
    const boxes = hamburger.matches ? blockers.map(b => b.getBoundingClientRect()) : [];
    hero.querySelectorAll('.tile').forEach(tile => {
      const r = tile.getBoundingClientRect();
      // "behind" = at least a third of the tile's width and height is covered
      const hidden = boxes.some(b =>
        Math.min(r.right, b.right) - Math.max(r.left, b.left) > r.width / 3 &&
        Math.min(r.bottom, b.bottom) - Math.max(r.top, b.top) > r.height / 3);
      tile.classList.toggle('is-off', hidden);
    });
  };

  const draw = () => {
    grids.forEach(g => {
      const isHero = g.el.dataset.grid === 'hero';
      renderGrid(g.el, g.index, isHero ? 480 : 0, isHero && hamburger.matches);
    });
    blockTiles();
  };
  draw();
  new ResizeObserver(draw).observe(document.body);
})();

/* ---------------------------------------------------------
   Navigation
   Desktop: the selection box follows the hovered item.
   ≤ 960px: the hamburger button opens the nav as a panel.
   --------------------------------------------------------- */
const mobileNav = window.matchMedia('(max-width: 960px)');

(() => {
  const nav = document.querySelector('.nav');
  const box = nav.querySelector('.nav-selection');
  const items = nav.querySelectorAll('.nav-item');
  const select = item => {
    if (mobileNav.matches) return;
    items.forEach(i => i.classList.toggle('is-active', i === item));
    box.style.left = `${item.offsetLeft}px`;
    box.style.width = `${item.offsetWidth}px`;
    nav.classList.add('is-hovering');
  };
  items.forEach(item => {
    item.addEventListener('mouseenter', () => select(item));
    item.addEventListener('focusin', () => select(item));
  });
  const clear = () => {
    nav.classList.remove('is-hovering');
    items.forEach(i => i.classList.remove('is-active'));
  };
  nav.addEventListener('mouseleave', clear);
  nav.addEventListener('focusout', e => { if (!nav.contains(e.relatedTarget)) clear(); });
})();

(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const bar = document.querySelector('.nav-bar');
  const setOpen = open => {
    nav.classList.toggle('is-open', open);
    bar.classList.toggle('is-menu-open', open);
    document.documentElement.style.overflow = open ? 'hidden' : '';   // the full-screen menu stops the page scrolling
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  nav.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('click', e => {
    if (nav.classList.contains('is-open') && !nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
  });
  mobileNav.addEventListener('change', () => setOpen(false));
})();

/* ---------------------------------------------------------
   Touch: tapping plays the hover effects
   Mentorship photos stay active until something else is tapped;
   grid tiles flash and fade like a passing cursor.
   --------------------------------------------------------- */
(() => {
  const sticky = '.cursor-photo';
  document.addEventListener('pointerup', e => {
    if (e.pointerType === 'mouse') return;
    const target = e.target.closest(sticky);
    document.querySelectorAll(`:is(${sticky}).is-tapped`).forEach(el => { if (el !== target) el.classList.remove('is-tapped'); });
    if (target) target.classList.toggle('is-tapped');

    const tile = e.target.closest('.tile');
    if (tile) {
      tile.classList.add('is-tapped');
      setTimeout(() => tile.classList.remove('is-tapped'), 400);
    }
  });
})();

/* ---------------------------------------------------------
   Upcoming events — scroll stack (after extrafazant.nl "Recent Werk")
   While the stack is pinned, scroll progress p runs 0 → cards − 1.
   For each step the front card falls away (accelerating, 0.9 window
   heights) and fades out near the end of its step, while the cards
   behind move one depth forward. Motion follows the scroll with a
   slight lag, and the stack tilts gently toward the mouse.
   --------------------------------------------------------- */
(() => {
  const stack = document.querySelector('[data-stack]');
  if (!stack) return;
  const pin = stack.querySelector('.stack-pin');
  const carousel = stack.querySelector('.carousel');
  const cards = [...stack.querySelectorAll('.card')];
  const active = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');

  // Figma card boxes (% of the 1387 × 731 stack) at depth 0 (front), 1, 2 (back)
  const DEPTH = [
    { left: 8.435,  top: 13.133, width: 83.129, height: 86.867 },
    { left: 11.680, top: 6.566,  width: 76.568, height: 79.891 },
    { left: 14.564, top: 0,      width: 70.872, height: 74.145 },
  ];
  const FALL = 0.9;          // window heights the leaving card drops
  const LAG = 0.3;           // seconds the stack trails the scroll
  const TILT_X = 6;          // degrees, mouse tilt
  const TILT_Y = 10;

  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const boxAt = d => {
    const i = Math.min(Math.floor(d), DEPTH.length - 2);
    const t = d - i;
    const a = DEPTH[i], b = DEPTH[i + 1];
    return { left: lerp(a.left, b.left, t), top: lerp(a.top, b.top, t), width: lerp(a.width, b.width, t), height: lerp(a.height, b.height, t) };
  };

  let target = 0, current = 0;
  let tilt = { x: 0, y: 0 }, tiltTarget = { x: 0, y: 0 };
  let last = 0, raf = 0;

  const readScroll = () => {
    const top = parseFloat(getComputedStyle(pin).top) || 0;
    const travel = stack.offsetHeight - pin.offsetHeight;
    const scrolled = top - stack.getBoundingClientRect().top;
    target = clamp(scrolled / travel, 0, 1) * (cards.length - 1);
  };

  const render = () => {
    cards.forEach((card, i) => {
      const local = current - i;                       // > 0 once this card is leaving
      const depth = Math.max(0, -local);
      const box = boxAt(Math.min(depth, DEPTH.length - 1));
      const leaving = i < cards.length - 1 ? clamp(local, 0, 1) : 0;
      const fall = leaving * leaving * FALL * window.innerHeight;           // power2.in
      const fade = 1 - clamp((leaving - 0.7) / 0.25, 0, 1);
      card.style.left = `${box.left}%`;
      card.style.top = `${box.top}%`;
      card.style.width = `${box.width}%`;
      card.style.height = `${box.height}%`;
      card.style.transform = fall ? `translateY(${fall}px)` : '';
      card.style.opacity = fade;
      card.style.visibility = fade ? '' : 'hidden';
      card.style.setProperty('--front', clamp(1 - depth, 0, 1));
    });
    carousel.style.transform = `perspective(1400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`;
  };

  const tick = now => {
    const dt = Math.min(0.1, (now - last) / 1000 || 0.016);
    last = now;
    const k = 1 - Math.exp(-dt / (LAG / 3));          // ~settles within LAG seconds
    current += (target - current) * k;
    const kt = 1 - Math.exp(-dt / 0.2);
    tilt.x += (tiltTarget.x - tilt.x) * kt;
    tilt.y += (tiltTarget.y - tilt.y) * kt;
    render();
    const settled = Math.abs(target - current) < 0.0005 && Math.abs(tiltTarget.x - tilt.x) < 0.01 && Math.abs(tiltTarget.y - tilt.y) < 0.01;
    raf = settled ? 0 : requestAnimationFrame(tick);
  };
  const wake = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); } };

  const onScroll = () => { readScroll(); wake(); };
  const onMove = e => {
    const r = pin.getBoundingClientRect();
    tiltTarget = { x: -((e.clientY - r.top) / r.height - 0.5) * TILT_X, y: ((e.clientX - r.left) / r.width - 0.5) * TILT_Y };
    wake();
  };
  const onLeave = () => { tiltTarget = { x: 0, y: 0 }; wake(); };

  const enable = () => {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    if (window.matchMedia('(hover: hover)').matches) {
      pin.addEventListener('mousemove', onMove);
      pin.addEventListener('mouseleave', onLeave);
    }
    readScroll();
    current = target;
    render();
  };
  const disable = () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    pin.removeEventListener('mousemove', onMove);
    pin.removeEventListener('mouseleave', onLeave);
    cancelAnimationFrame(raf);
    raf = 0;
    cards.forEach(card => card.removeAttribute('style'));    // CSS list layout takes over
    carousel.removeAttribute('style');
  };

  const sync = () => (active.matches ? enable() : disable());
  active.addEventListener('change', sync);
  sync();
})();

/* ---------------------------------------------------------
   Footer: four columns down to 961px. At ≤ 960px — or as soon as the
   four columns would collide (a heading or button no longer fits its
   column, or the columns overflow the footer) — switch to the stacked
   footer.
   --------------------------------------------------------- */
(() => {
  const cols = document.querySelector('.footer-cols');
  const narrow = window.matchMedia('(max-width: 960px)');
  const tight = el => el.scrollWidth > el.clientWidth + 1;
  // Buttons: compare the label text with the button (their corner handles sit outside on purpose)
  const labelTight = btn => {
    const range = document.createRange();
    const text = [...btn.childNodes].find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
    if (!text) return false;
    range.selectNodeContents(text);
    return range.getBoundingClientRect().width > btn.clientWidth - 16;   // 8px padding each side
  };

  const update = () => {
    if (narrow.matches) { cols.classList.add('is-stacked'); return; }
    cols.classList.remove('is-stacked');                     // measure the four-column layout
    const collides = tight(cols) ||
      [...cols.querySelectorAll('.footer-heading, .footer-links a')].some(tight) ||
      [...cols.querySelectorAll('.select-btn')].some(labelTight);
    cols.classList.toggle('is-stacked', collides);
  };

  update();
  window.addEventListener('resize', update);
  narrow.addEventListener('change', update);
  document.fonts?.ready.then(update);
})();

/* ---------------------------------------------------------
   Text reveal (after extrafazant.nl's hero heading)
   Headings rise letter by letter, other text line by line, each piece
   sliding up from behind a mask under its line (1s, expo.out; letters
   0.0175s apart, lines 0.07s apart, blocks in one section 0.12s apart).
   Text on screen at load animates straight away; the rest animates the
   first time it scrolls into view. Afterwards the original markup is
   put back, so hover effects and resizing work as before.
   --------------------------------------------------------- */
(() => {
  window.__revealReady = true;
  const root = document.documentElement;
  if (!root.classList.contains('reveal-pending')) return;   // reduced motion (see <head>)

  const TARGETS = [
    ['.wordmark-letters', 'chars'],               // the whole lockup: letters rise as one wave
    ['.wordmark-tagline', 'lines'],
    ['.intro-ctas .cta-title', 'lines'],
    ['.intro-ctas .cta-body', 'lines'],
    ['.sponsors-title', 'chars'],
    ['.statement-title .line', 'chars'],
    ['.statement .lede', 'lines'],
    ['.events .section-title', 'chars'],
    ['.events-eyebrow', 'lines'],
    ['.cta-view-all .cta-title', 'lines'],
    ['.mentorship .section-title', 'chars'],
    ['.mentorship-eyebrow', 'lines'],
    ['.mentor-card .cta-title', 'lines'],
    ['.mentor-card .cta-body', 'lines'],
    ['.community-title', 'chars'],
    ['.cta-join .cta-title', 'lines'],
  ];
  const DURATION = 1;            // s
  const CHAR_GAP = 0.0175;       // s between letters
  const LINE_GAP = 0.07;         // s between lines
  const BLOCK_GAP = 0.12;        // s between text blocks in the same section

  const items = [];
  TARGETS.forEach(([sel, mode]) => document.querySelectorAll(sel).forEach(el => {
    if (el.dataset.rv) return;
    el.dataset.rv = mode;
    items.push(el);
  }));

  const mask = inner => {
    const m = document.createElement('span');
    m.className = 'rv-m';
    m.append(inner);
    return m;
  };
  const piece = content => {
    const i = document.createElement('span');
    i.className = 'rv-i';
    i.append(content);
    return i;
  };

  // Rebuild an element's content with masked pieces; returns the moving pieces in order.
  function split(el, mode) {
    const pieces = [];
    const targets = [];          // chars mode: where each letter sits in the real (kerned) text
    const wordStart = [];        // chars mode: index of the first letter of each letter's word
    const range = document.createRange();
    const build = node => {
      if (node.nodeType === Node.TEXT_NODE) {
        const out = [];
        let offset = 0;
        node.textContent.split(/(\s+)/).forEach(part => {
          const start = offset;
          offset += part.length;
          if (!part) return;
          if (/^\s+$/.test(part)) { out.push(document.createTextNode(part)); return; }
          if (mode === 'chars') {
            const word = document.createElement('span');
            word.className = 'rv-m';
            let o = start;
            const first = pieces.length;
            [...part].forEach(ch => {
              wordStart.push(first);
              range.setStart(node, o);
              range.setEnd(node, o + ch.length);
              targets.push(range.getBoundingClientRect().left);
              o += ch.length;
              const p = piece(ch); pieces.push(p); word.append(p);
            });
            out.push(word);
          } else {
            const p = piece(part); pieces.push(p); out.push(mask(p));
          }
        });
        return out;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return [node.cloneNode(true)];
      if (node.namespaceURI === 'http://www.w3.org/2000/svg') {           // arrow icons move with their line
        const p = piece(node.cloneNode(true)); pieces.push(p); return [mask(p)];
      }
      if (!node.textContent.trim()) return [node.cloneNode(true)];       // handles, <br>, …
      const copy = node.cloneNode(false);
      node.childNodes.forEach(c => copy.append(...build(c)));
      return [copy];
    };
    const original = [...el.childNodes];
    const built = [];
    original.forEach(c => built.push(...build(c)));
    el.replaceChildren(...built);
    // Separate letter boxes lose the font's kerning (e.g. "YC"), so restore the
    // kerned spacing inside each word. Words keep their real width, so line
    // breaks and centring match the real text and every letter rises straight
    // into its final place.
    if (mode === 'chars') {
      pieces.forEach((p, i) => {
        const f = wordStart[i];
        if (f === i) return;
        const want = targets[i] - targets[f];
        const now = p.getBoundingClientRect().left - pieces[f].getBoundingClientRect().left;
        if (Math.abs(want - now) > 0.05) p.style.marginLeft = `${want - now}px`;
      });
    }
    return { pieces, original };
  }

  function play(el, startDelay) {
    const mode = el.dataset.rv;
    const { pieces, original } = split(el, mode);
    let delays;
    if (mode === 'chars') {
      delays = pieces.map((_, i) => startDelay + i * CHAR_GAP);
    } else {                                                     // group pieces into lines by position
      let line = -1, lastTop = -Infinity;
      delays = pieces.map(p => {
        const top = p.getBoundingClientRect().top;
        if (top > lastTop + 2) { line++; lastTop = top; }
        return startDelay + line * LINE_GAP;
      });
    }
    el.classList.add('rv-on');
    void el.offsetHeight;                                        // commit the hidden start position…
    pieces.forEach((p, i) => { p.style.setProperty('--rv-delay', `${delays[i]}s`); p.classList.add('rv-go'); });   // …then slide
    const total = (Math.max(0, ...delays) + DURATION) * 1000 + 100;
    setTimeout(() => el.replaceChildren(...original), total);   // back to the real markup
  }

  const sectionOf = el => el.closest('section, header, footer, nav') || document.body;
  // Play a batch of elements in page order, staggering blocks within each section
  const playBatch = els => {
    const counts = new Map();
    els.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
      .forEach(el => {
        const sec = sectionOf(el);
        const n = counts.get(sec) || 0;
        counts.set(sec, n + 1);
        play(el, n * BLOCK_GAP);
      });
  };
  const io = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting).map(e => e.target);
    visible.forEach(el => io.unobserve(el));
    playBatch(visible);
  }, { rootMargin: '0px 0px -15% 0px' });                         // "top 85%", as on extrafazant

  let started = false;
  const start = () => {
    if (started) return;
    started = true;
    // Everything already on screen plays now (first visit); the rest waits for scrolling.
    const onScreen = [], later = [];
    items.forEach(el => {
      const r = el.getBoundingClientRect();
      (r.bottom > 0 && r.top < window.innerHeight ? onScreen : later).push(el);
    });
    playBatch(onScreen);
    later.forEach(el => io.observe(el));
  };
  // Prefer splitting with the real font, but don't keep the page blank waiting for it.
  if (document.fonts && document.fonts.status !== 'loaded') {
    document.fonts.ready.then(start);
    setTimeout(start, 400);
  } else {
    start();
  }
})();

/* ---------------------------------------------------------
   Sponsor ticker: Figma track holds the logo set three times
   --------------------------------------------------------- */
(() => {
  const track = document.querySelector('.ticker-track');
  const set = track.querySelector('.ticker-set');
  for (let i = 0; i < 2; i++) {
    const copy = set.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    copy.querySelectorAll('img').forEach(img => (img.alt = ''));
    track.appendChild(copy);
  }
})();
