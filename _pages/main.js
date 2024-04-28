document.getElementById('switchButton').addEventListener('click', function() {
    fetchYmlFile();
});

function fetchYmlFile() {
    // 替换为您的yml文件路径
    var ymlUrl = '../talkmap/_config.yml';

    fetch(ymlUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById('ymlContent').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching yml file:', error);
        });
}
