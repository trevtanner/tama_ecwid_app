Ecwid.OnAPILoaded.add(function () {
  Ecwid.OnPageLoaded.add(function (page) {
    //STX product check
    if (page.type == "PRODUCT" && page.name.includes("STX")) {
      console.log("This is an STX Product");
      console.log("Removing price and ability to purchase online");

      const customContainer = document.createElement("div");
      customContainer.className = "my-custom-field-container";

      const newBuyButton = document.createElement("button");
      newBuyButton.className = "new-buy-button disabled";
      newBuyButton.id = "new-buy-btn";
      newBuyButton.textContent = "Available In-Store Only"; // Initial message
      newBuyButton.disabled = true; // Disabled by default
      customContainer.appendChild(newBuyButton);

      const productDetailsActionPanel = document.querySelector(
        ".product-details__action-panel"
      );
      if (productDetailsActionPanel) {
        productDetailsActionPanel.parentElement.insertBefore(
          customContainer,
          productDetailsActionPanel
        );
      } else {
        console.error(
          "Could not find the target element to inject the form fields."
        );
      }

      //Design Configs

      window.ec = window.ec || Object();
      window.ec.storefront = window.ec.storefront || Object();
      window.ec.storefront.product_details_show_buy_button = false;
      // window.ec.storefront.product_details_show_product_price = false;
      Ecwid.refreshConfig && Ecwid.refreshConfig();
    }
  });
});
