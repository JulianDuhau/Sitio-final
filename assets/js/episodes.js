document.addEventListener('DOMContentLoaded', () => {
    function toggleDescription(descId, moreId) {
        const descElement = document.getElementById(descId);
        const moreElement = document.getElementById(moreId);
        console.log(`Toggling description for ${descId}`);
        if (descElement.classList.contains('show-more')) {
            descElement.classList.remove('show-more');
            moreElement.style.display = 'none';
        } else {
            descElement.classList.add('show-more');
            moreElement.style.display = 'inline';
        }
    }

    document.getElementById('prevSeason').addEventListener('click', function () {
        const activeTab = document.querySelector('.tab-pane.show.active');
        console.log('Previous season button clicked');
        const prevTab = activeTab.previousElementSibling;
        if (prevTab && prevTab.classList.contains('tab-pane')) {
            const prevTabId = prevTab.getAttribute('id');
            const prevTabButton = document.querySelector(`button[data-bs-target="#${prevTabId}"]`);
            if (prevTabButton) {
                console.log(`Switching to ${prevTabId}`);
                prevTabButton.click();
            }
        }
    });

    document.getElementById('nextSeason').addEventListener('click', function () {
        const activeTab = document.querySelector('.tab-pane.show.active');
        console.log('Next season button clicked');
        const nextTab = activeTab.nextElementSibling;
        if (nextTab && nextTab.classList.contains('tab-pane')) {
            const nextTabId = nextTab.getAttribute('id');
            const nextTabButton = document.querySelector(`button[data-bs-target="#${nextTabId}"]`);
            if (nextTabButton) {
                console.log(`Switching to ${nextTabId}`);
                nextTabButton.click();
            }
        }
    });

    // Apply toggleDescription function to all "Read more" buttons
    document.querySelectorAll('.btn-outline-secondary').forEach(button => {
        const descId = button.previousElementSibling.id;
        const moreId = button.previousElementSibling.querySelector('span').id;
        button.addEventListener('click', () => toggleDescription(descId, moreId));
    });
});
