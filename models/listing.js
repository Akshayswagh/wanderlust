const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,

  image: {
    url: {
      type: String,
      default: "https://www.google.com/imgres?q=%22serene%20waterfront%20retreat%22%20tranquil%20lakeside%20cottage&imgurl=https%3A%2F%2Fimages.trvl-media.com%2Flodging%2F69000000%2F68870000%2F68860800%2F68860770%2F0edf82a1.jpg%3Fimpolicy%3Dresizecrop%26rw%3D500%26ra%3Dfit&imgrefurl=https%3A%2F%2Fwww.vrbo.com%2Fen-ca%2Fcottage-rental%2Fp9584829&docid=nMBTHCk9V5awdM&tbnid=AGvh5q89CcVGdM&vet=12ahUKEwjL8cezh8OFAxXc6qACHZycCKYQM3oECBoQAA..i&w=500&h=313&hcb=2&itg=1&ved=2ahUKEwjL8cezh8OFAxXc6qACHZycCKYQM3oECBoQAA", 
    },
    filename: String,
  },

  // image: {
  //   url: String,
  //   filename: String,
  // },

  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  // geometry: {
  //   type: {
  //     type: String, // Don't do `{ location: { type: String } }`
  //     enum: ["Point"], // 'location.type' must be 'Point'
  //     required: true,
  //   },
  //   coordinates: {
  //     type: [Number],
  //     required: true,
  //   },
  // },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
