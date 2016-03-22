export default {
    render(content) {
        return (
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React rendered on server</title>
</head>
<body>
    <div id="app">${content}</div>
    <script src="public/js/app.js" type="text/javascript"></script>
</body>
</html>
`
        );
    },
};
