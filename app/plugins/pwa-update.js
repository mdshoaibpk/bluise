export default async (context) => {
    const workbox = await window.$workbox;
  
    if (!workbox) {
      console.debug("Workbox couldn't be loaded.");
      return;
    } else {
      console.log('Workbox has been loaded.');  // Dont see any message.
    }
  
    workbox.addEventListener('installed', (event) => {
      console.log('i am being used')
      if (!event.isUpdate) {
        console.log('The PWA is on the latest version.');
        return;
      }
  
      console.log('There is an update for the PWA, reloading...');
      // window.location.reload();
    });
  };