<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Laravel</title>
    </head>

    <body>
        <h2>Laravel 4.2</h2>

        <?php foreach ($tasks as $task) : ?>
            <li><?= $task->body; ?></li>
        <?php endforeach; ?>


    </body>
</html>