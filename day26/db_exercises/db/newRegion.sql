

INSERT
INTO `region`
(`name`, `slug`)
VALUES
('Eastern Europe', 'eastern-europe');

INSERT
INTO `region`
(`name`, `slug`)
VALUES
('Western Europe', 'western-europe');

INSERT
INTO `region`
(`name`, `slug`)
VALUES
('North America', 'north-america'),
('Central America', 'central-america'),
('South America', 'south-america');





'North America' and 'north-america'
'Central America' and 'central-america'
'South America' and 'south-america'




Write SQL query to insert a row into the region table and execute it.

The values will be:

'Western Europe' for name
'western-europe' for slug
no mention of id, in the columns or values

UPDATE `city`
SET `Population` = '1294513'
WHERE `id` = 3339;

UPDATE `country`
SET `HeadOfState` = 'Donald J. Trump'
WHERE `GovernmentForm` = 'US Territory';

UPDATE `country`
SET `Population` = 300
    `GNP` = 13.91
WHERE `Name` = 'United States Minor Outlying Islands';