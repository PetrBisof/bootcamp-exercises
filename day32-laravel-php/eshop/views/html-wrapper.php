<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <title>My eshop</title>

    <link rel="stylesheet" href="css/main.css" />

</head>
<body>

    <div id="page">
        <?php
        /* <!-- header --> */
        require_once("header.php");

       /*  <!-- topmenu --> */
        require_once("topmenu.php");
        ?>

        <div id="content">

            <!-- homepage/layout -->
            <?php
            require_once("homepage/layout.php");
            ?>

        </div>
        
            <?php require_once("./views/footer.php") ?>
            <!-- footer -->

    </div>

</body>
</html>