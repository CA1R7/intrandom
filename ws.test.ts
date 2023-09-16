import WebSocket from "ws";
import { BinaryWriter, BinaryReader } from "./utils/binarypacket";

/*
  You can find binarypacket.ts in this repository below 
  Credits to @Luka967 - Cigar Project
  https://github.com/CA1R7/yurex-client/blob/main/src/utils/other/binary_packet.ts
*/

const XAPIKEY = "---";

const ws = new WebSocket("wss://api.intrandom.com/gateaway", {
  perMessageDeflate: false,
  headers: {
    "x-auth-token": XAPIKEY,
  },
});

ws.on("open", function open() {
  ws.send(new Uint8Array([254, 0x6]), { binary: true }); // Send 254, 0x6 to set the protocol version to 6

  let lk = new BinaryWriter();

  lk.setUint8(0x2); // Packet ID (required)
  lk.setUint8(0x0); // Minmum random Int (required)
  lk.setUint8(10); // Max random Int (required)
  lk.writeStringZeroUtf8("mytestseed"); // Seed (required)

  ws.send(lk.build(), { binary: true });
});

ws.on("message", function message(data) {
  let read = new BinaryReader(data),
    packedId = read.getUint8(); // Packet ID

  if (packedId == 0x1) {
    // 0x1 = Randon function
    console.log(read.getUint8()); // Random Int
    console.log(read.getStringUTF8()); // Random Key
    console.log(read.getStringUTF8()); // Seed
  }
});

ws.on("close", function closer(data, r) {
  console.log("Closed");
});
