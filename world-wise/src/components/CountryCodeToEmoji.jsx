import React from 'react'

function CountryCodeToEmoji({countryCode}) {
    if(!countryCode) return
    const countryFlag = countryCode.toLowerCase();
    console.log(countryFlag);
    const imgUrl=`https://flagcdn.com/24x18/${countryFlag}.png`;
    console.log(imgUrl);

    return (
      <img src={imgUrl} alt="flag" />
    );
}

export default CountryCodeToEmoji