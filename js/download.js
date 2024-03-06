document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.download-icon').forEach(function(icon) {
        icon.addEventListener('click', function() {
            // Get the image URL
            var imageUrl = this.parentElement.querySelector('.card-img-top').src;
            // Create a temporary link element
            var link = document.createElement('a');
            link.href = imageUrl;
            link.download = 'image.jpg';

            // Append the link to the body and trigger the click event
            document.body.appendChild(link);
            link.click();

            // Remove the link from the body
            document.body.removeChild(link);
        });
    });
});
