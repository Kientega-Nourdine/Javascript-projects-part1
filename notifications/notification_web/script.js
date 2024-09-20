Notification.requestPermission(function() {

    if(Notification.permission == 'granted') {

        showNotification();
        
    } else {
        console.log('Les notifications ont etes refuses');
        // alert("Permission d'affichage de notifications refusee !");
    }
});

function showNotification () {

    let notification = new Notification("Notification de Kientega Nourdine", {
        body: 'Cliquer ici, vous avez un nouveau message',
        icon: "images/notification.svg"
    });

    notification.onclick = function() {
        window.open('notification.html', '_blank');
    };

}