const mongoose = require("mongoose");

const Proposal = mongoose.model(
  "Proposal",
  new mongoose.Schema(
    {
      idProposal: {
        type: String,
      },
      namaSTO: {
        type: String,
        required: [true, "Nama STO wajib diisi"],
      },
      segmen: {
        type: String,
        required: [true, "Segmen wajib diisi"],
      },
      namaAlpro: {
        type: String,
        required: [true, "Nama Alpro wajib diisi"],
      },
      jenisQE: {
        type: String,
        required: [true, "Jenis QE wajib diisi"],
      },
      koordinat: {
        type: String,
      },
      keterangan: {
        type: String,
      },
      proposer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Proposer",
      },
      designer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Designer",
      },
      executor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Executor",
      },
      status: {
        type: String,
        enum: [
          "SUBMITTED",
          "APPROVED",
          "REJECTED",
          "REDESIGN",
          "INSTALLATION",
          "CLOSED",
        ],
        default: "SUBMITTED",
      },
      design: {
        type: String,
      },
      designevidence: {
        type: String,
      },
      rab: {
        type: String,
      },
      rabevidence: {
        type: String,
      },
      nilairab: {
        type: Number,
      },
      nilairabevidence: {
        type: Number,
      },
      catatan: {
        type: String,
      },
      mitra: {
        type: String,
      },
      timeline: {
        type: Array,
      },
    },
    { timestamps: true }
  )
);

module.exports = Proposal;
