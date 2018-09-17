// returns an array of all matching drivers
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter( function(driver){
    return driver.revenue > revenue;
  });
}

// returns an array of all matching drivers names as string
 function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function( driver){
    return driver.name
  });
}

// returns an array of all matching drivers
 function exactMatch(drivers, attribute){
  const key = Object.keys(attribute)[0];
  return drivers.filter(function (driver){
    return driver[key] === attribute[key];
  });
}

// returns an array of names for all matching drivers
 function exactMatchToList(drivers, attribute){
  return exactMatch(drivers, attribute).map( function(driver){
    return driver.name;
  });
}
