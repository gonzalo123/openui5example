<?php

include __DIR__ . '/../../vendor/autoload.php';

use Silex\Application;

$app = new Application(['debug' => true]);

$app->get('/invoices', function (Application $app) {
    return $app->json(
        [
            "Invoices" => [
                [
                    "ProductName"   => "Pineapple (silex)",
                    "Quantity"      => 21,
                    "ExtendedPrice" => 87.2000,
                    "ShipperName"   => "Fun Inc.",
                    "ShippedDate"   => "2015-04-01T00:00:00",
                    "Status"        => "A"
                ],
                [
                    "ProductName"   => "Milk",
                    "Quantity"      => 4,
                    "ExtendedPrice" => 9.99999,
                    "ShipperName"   => "ACME",
                    "ShippedDate"   => "2015-02-18T00:00:00",
                    "Status"        => "B"
                ],
                [
                    "ProductName"   => "Canned Beans",
                    "Quantity"      => 3,
                    "ExtendedPrice" => 6.85000,
                    "ShipperName"   => "ACME",
                    "ShippedDate"   => "2015-03-02T00:00:00",
                    "Status"        => "B"
                ],
                [
                    "ProductName"   => "Salad",
                    "Quantity"      => 2,
                    "ExtendedPrice" => 8.8000,
                    "ShipperName"   => "ACME",
                    "ShippedDate"   => "2015-04-12T00:00:00",
                    "Status"        => "C"
                ],
                [
                    "ProductName"   => "Bread",
                    "Quantity"      => 1,
                    "ExtendedPrice" => 2.71212,
                    "ShipperName"   => "Fun Inc.",
                    "ShippedDate"   => "2015-01-27T00:00:00",
                    "Status"        => "A"
                ]
            ]
        ]
    );
});
$app->run();