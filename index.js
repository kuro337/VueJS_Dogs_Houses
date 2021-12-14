const data = [
  {
    mainImage: "./images/cat-2.jpg",
    otherImage: "./images/cat-1.jpg",
    title: "Cat",
    descr: "Cats are very cool.",
    year: 2021,
    place: "USA",
  },
  {
    mainImage: "./images/dog-2.jpg",
    otherImage: "./images/dog-1.jpg",
    title: "Dog",
    descr: "My corgi!",
    year: 2015,
    place: "India",
  },
  {
    mainImage: "./images/house-2.jpg",
    otherImage: "./images/house-1.jpg",
    title: "House",
    descr: "My winter house.",
    year: 2015,
    place: "Somewhere in northen hemisphere",
  },
  {
    mainImage: "./images/bike-2.jpg",
    otherImage: "./images/bike-1.jpg",
    title: "House",
    descr: "My dream ride!",
    year: 2021,
    place: "Somewhere in the wild",
  },
];

var app = new Vue({
  el: "#app",
  data: {
    allImages: data.map((img) => {
      return { image: img.mainImage, title: img.title };
    }),
    includeDescription: false,
    includeYear: false,
    includePlace: false,
    descr: "",
    year: 0,
    place: "",
    hover: false,
  },
  methods: {
    setAll: function (_opt) {
      this.includeDescription = _opt;
      this.includeYear = _opt;
      this.includePlace = _opt;
    },
    swapImage: function (_idx) {
      console.log("Swapping " + _idx);
      this.allImages[_idx].image = data[_idx].otherImage;

      if (this.includeDescription || this.includePlace || this.includeYear) {
        this.descr = data[_idx].descr;
        this.year = data[_idx].year;
        this.place = data[_idx].place;
        this.hover = true;
      }
    },
    resetImage: function (_idx) {
      console.log("Resetting " + _idx);
      this.allImages[_idx].image = data[_idx].mainImage;

      this.descr = "";
      this.year = 0;
      this.place = "";
      this.hover = false;
    },
  },
});
