**My Design
I used a white background throughout the app the cover up the background color that comes with images.
Unlike the design from thr mockup I placed all the product details in one container for easy attribution.
I created my our logo the corner store and used it inplace of the logo.
Icon packages like expo vector icon was added to render some icons
Fake store API was integrated to get dummy data for my store through the getData function.
The project was created from scrtach with no templates.
Drawer and Stack navigation was used for routing and navigations
The idea of nested navigation was used. check Navigations Folder
Navigations was used to pass product details onto details screen but context API use pass product data from home screen to cart screen to prevent navigations whiles passing data
A cunstom drawer component was created and styled, the hamburger menu was used as the trigger to open the drawer
A custom header component was rendered and shared for all screen wiith similar header




**Storing Data
Since it is not huge data we are storing I used async storage product added to cart can be reloaded each time the app is refreshed.
The product added from the home screen is stored to async stroage via handle to cart function
on the cart screen the fetchData function is used to get the data stored in async storage and the flatlist component is used to render each product added
The states of the add icon on the home screen is being definded by the products in async storage, such that if an item is added the icon changes to the text added and if it's removed it changes back to the add icon

![Screenshot_20250416_162827](https://github.com/user-attachments/assets/49148ad0-2895-4573-80e9-4dff87e3fa6c)

![Screenshot_20250416_162847](https://github.com/user-attachments/assets/0138fed9-f93b-4b60-924a-49ccf7ee0b48)
