function generalFunction() {
    var groceries = {
        apple: 0,
        baked_potato: 0,
        bread: 0,
        cake: 0,
        carrot: 0,
        honey_bottle: 0,
        melon_slice: 0,
        poisonous_potato: 0,
        raw_beef: 0,
        steak: 0,
        suspicious_stew: 0,
        sweet_berries: 0
    };
    var pricesDirt = {
        d_apple: 5,
        d_baked_potato: 12,
        d_bread: 3,
        d_cake: 78,
        d_carrot: 16,
        d_honey_bottle: 66,
        d_melon_slice: 13,
        d_poisonous_potato: 95,
        d_raw_beef: 29,
        d_steak: 42,
        d_suspicious_stew: 329,
        d_sweet_berries: 16
    };
    groceries.apple = document.getElementById("appleInput").value;
    groceries.baked_potato = document.getElementById("baked_potatoInput").value;
    groceries.bread = document.getElementById("breadInput").value;
    groceries.cake = document.getElementById("cakeInput").value;
    groceries.carrot = document.getElementById("carrotInput").value;
    groceries.honey_bottle = document.getElementById("honey_bottleInput").value;
    groceries.melon_slice = document.getElementById("melon_sliceInput").value;
    groceries.poisonous_potato = document.getElementById("poisonous_potatoInput").value;
    groceries.raw_beef = document.getElementById("raw_beefInput").value;
    groceries.steak = document.getElementById("steakInput").value;
    groceries.suspicious_stew = document.getElementById("suspicious_stewInput").value;
    groceries.sweet_berries = document.getElementById("sweet_berriesInput").value;

    //var checkBox = document.getElementById("myCheck");
    //if (checkBox.checked == true){
    //    text.style.display = "block";
    //  } else {
    //    text.style.display = "none";
    //  };

    if (groceries.apple<=0) {
        console.log("There aren't any apples.");
        document.getElementById("appleLine").style.display="none";
    } else {
        var applePriceDirt = groceries.apple * pricesDirt.d_apple;
        console.log("There are " +groceries.apple, "apples, which costs " +applePriceDirt, "dirt blocks.");
        document.getElementById("appleBold").innerHTML= ""+groceries.apple+ "";
    }
    if (groceries.potato<=0) {
        console.log("There aren't any potatoes.");
        document.getElementById("baked_potatoLine").style.display="none";
    } else {
        var baked_potatoPriceDirt = groceries.baked_potato * pricesDirt.d_baked_potato;
        console.log("There are " +groceries.baked_potato, "potatoes, which costs " +baked_potatoPriceDirt, "dirt blocks.");
        document.getElementById("baked_potatoBold").innerHTML= ""+groceries.baked_potato+ "";
    };


    var totalPriceDirt = applePriceDirt;
    console.log("All together, the items in the cart will set you back " +applePriceDirt, "dirt blocks.")

    return;
};

