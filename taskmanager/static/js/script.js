document.addEventListener('DOMContentLoaded', function() {
    // sidenav initializing
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // date picker
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });

    // Select innitialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsible initializataion
    let collapsibles = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapsibles);
   
  });

 
 