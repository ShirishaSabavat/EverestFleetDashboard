import React from 'react';

const CarDetails = (props) => {
  const { incentives = [], incentivesData = [] } = props;
  const incentivesTemp = incentives.sort((a, b) => (Number(a?.no_of_trips) > Number(b?.no_of_trips)
    ? 1 : -1));
  const countCarsFun = (value1, value2) => {
    const totalCars = incentivesData.filter((item) => (value2 === undefined
      ? Number(item?.total_trips) >= Number(value1)
      : Number(item?.total_trips) >= Number(value1)
      && Number(item?.total_trips) < Number(value2)));
    const countCars = totalCars.length;
    return countCars;
  };
  return (
    <div style={{ margin: '-10px -12px 0px -12px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1062 497">
        <defs>
          <filter id="Rectangle_884" x="0" y="0" width="1062" height="497" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feFlood floodOpacity="0.059" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <clipPath id="clip-path">
            <rect id="Rectangle_890" data-name="Rectangle 890" width="178" height="338" transform="translate(830 810)" fill="rgba(55,189,200,0.3)" />
          </clipPath>
          <clipPath id="clip-path-2">
            <rect id="Rectangle_891" data-name="Rectangle 891" width="221" height="314" transform="translate(1008 810)" fill="rgba(55,189,200,0.7)" stroke="#707070" strokeWidth="1" />
          </clipPath>
          <clipPath id="clip-path-3">
            <rect id="Rectangle_892" data-name="Rectangle 892" width="219" height="323" transform="translate(1229 810)" fill="#37bdc8" stroke="#707070" strokeWidth="1" />
          </clipPath>
          <clipPath id="clip-path-4">
            <rect id="Rectangle_893" data-name="Rectangle 893" width="219" height="352" transform="translate(1448 810)" fill="#1da0ab" stroke="#707070" strokeWidth="1" />
          </clipPath>
          <clipPath id="clip-path-5">
            <rect id="Rectangle_894" data-name="Rectangle 894" width="189" height="278" transform="translate(1667 810)" fill="#128a94" stroke="#707070" strokeWidth="1" />
          </clipPath>
        </defs>
        <g id="Incentives" transform="translate(-812 -709)">
          <g transform="matrix(1, 0, 0, 1, 812, 709)" filter="url(#Rectangle_884)">
            <rect id="Rectangle_884-2" data-name="Rectangle 884" width="1026" height="461" rx="9" transform="translate(18 15)" fill="#fff" />
          </g>
          <text id="Incentives_Details" data-name="Incentives Details" transform="translate(859.5 775)" fill="#333" fontSize="24" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600"><tspan x="0" y="0">Incentives Details</tspan></text>
          <line id="Line_94" data-name="Line 94" x2="1026.5" transform="translate(830 809.5)" fill="none" stroke="#ced4d4" strokeWidth="0.6" opacity="0.8" />
          <line id="Line_95" data-name="Line 95" y2="198.5" transform="translate(1007.5 809.5)" fill="none" stroke="#ced4d4" strokeWidth="0.6" opacity="0.8" />
          <line id="Line_98" data-name="Line 98" y2="198.5" transform="translate(1228.5 809.5)" fill="none" stroke="#ced4d4" strokeWidth="0.6" opacity="0.8" />
          <line id="Line_99" data-name="Line 99" y2="198.5" transform="translate(1447.5 809.5)" fill="none" stroke="#ced4d4" strokeWidth="0.6" opacity="0.8" />
          <line id="Line_100" data-name="Line 100" y2="198.5" transform="translate(1666.5 809.5)" fill="none" stroke="#ced4d4" strokeWidth="0.6" opacity="0.8" />
          <rect id="Rectangle_895" data-name="Rectangle 895" width="219" height="232" transform="translate(1229 810)" fill="#37bdc8" />
          <g id="In1" transform="translate(0 22)">
            <g id="Trips">
              <text id="Trips-2" data-name="Trips" transform="translate(894 858)" fill="#86a1a4" fontSize="18" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="16" y="0">Trips</tspan></text>
              <text id="_40" data-name="40" transform="translate(860 859)" fill="#333" fontSize="22" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600">
                <tspan x="0" y="0">
                  {!incentivesTemp?.[0]?.no_of_trips ? 0 : incentivesTemp?.[0]?.no_of_trips}
                </tspan>
              </text>
            </g>
            <g id="Amt">
              <text id="_800" data-name="800" transform="translate(883.079 894)" fill="#013453" fontSize="32" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600">
                <tspan x="0" y="0">
                  {!incentivesTemp?.[0]?.incentive ? 0 : incentivesTemp?.[0]?.incentive}
                </tspan>
              </text>
              <path id="Icon_awesome-rupee-sign" data-name="Icon awesome-rupee-sign" d="M17.4,5.866a.678.678,0,0,0,.678-.678V2.928A.678.678,0,0,0,17.4,2.25H.678A.678.678,0,0,0,0,2.928V5.456a.678.678,0,0,0,.678.678H5.5A4.076,4.076,0,0,1,8.94,7.674H.678A.678.678,0,0,0,0,8.352v2.26a.678.678,0,0,0,.678.678H9.647A3.9,3.9,0,0,1,5.424,14.6H.678A.678.678,0,0,0,0,15.28v2.995a.678.678,0,0,0,.218.5L9.543,27.38a.678.678,0,0,0,.46.18h4.664a.678.678,0,0,0,.46-1.176L6.6,18.515a7.74,7.74,0,0,0,7.814-7.226H17.4a.678.678,0,0,0,.678-.678V8.352a.678.678,0,0,0-.678-.678H14.085a7.739,7.739,0,0,0-.805-1.808Z" transform="translate(860 867.93)" fill="#013453" stroke="#fff" strokeWidth="1" />
            </g>
          </g>
          <g id="In2" transform="translate(208 22)">
            <g id="Trips-3" data-name="Trips">
              <text id="Trips-4" data-name="Trips" transform="translate(894 858)" fill="#86a1a4" fontSize="18" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="16" y="0">Trips</tspan></text>
              <text id="_80" data-name="80" transform="translate(860 859)" fill="#333" fontSize="22" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600">
                <tspan x="0" y="0">
                  {!incentivesTemp?.[1]?.no_of_trips ? 0 : incentivesTemp?.[1]?.no_of_trips}
                </tspan>

              </text>
            </g>
            <g id="Amt-2" data-name="Amt">
              <text id="_1000" data-name="1000" transform="translate(883.079 894)" fill="#013453" fontSize="32" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600">
                <tspan x="0" y="0">
                  {!incentivesTemp?.[1]?.incentive ? 0 : incentivesTemp?.[1]?.incentive}
                </tspan>

              </text>
              <path id="Icon_awesome-rupee-sign-2" data-name="Icon awesome-rupee-sign" d="M17.4,5.866a.678.678,0,0,0,.678-.678V2.928A.678.678,0,0,0,17.4,2.25H.678A.678.678,0,0,0,0,2.928V5.456a.678.678,0,0,0,.678.678H5.5A4.076,4.076,0,0,1,8.94,7.674H.678A.678.678,0,0,0,0,8.352v2.26a.678.678,0,0,0,.678.678H9.647A3.9,3.9,0,0,1,5.424,14.6H.678A.678.678,0,0,0,0,15.28v2.995a.678.678,0,0,0,.218.5L9.543,27.38a.678.678,0,0,0,.46.18h4.664a.678.678,0,0,0,.46-1.176L6.6,18.515a7.74,7.74,0,0,0,7.814-7.226H17.4a.678.678,0,0,0,.678-.678V8.352a.678.678,0,0,0-.678-.678H14.085a7.739,7.739,0,0,0-.805-1.808Z" transform="translate(860 867.93)" fill="#013453" stroke="#fff" strokeWidth="1" />
            </g>
          </g>
          <g id="In_3" data-name="In 3" transform="translate(429.579 22)">
            <g id="Trips-5" data-name="Trips" transform="translate(0.421)">
              <text id="Trips-6" data-name="Trips" transform="translate(903 858)" fill="#fff" fontSize="18" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="16" y="0">Trips</tspan></text>
              <text id="_100" data-name="100" transform="translate(860 859)" fill="#fff" fontSize="22" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600">
                <tspan x="0" y="0">
                  {!incentivesTemp?.[2]?.no_of_trips ? 0 : incentivesTemp?.[2]?.no_of_trips}
                </tspan>
              </text>
            </g>
            <g id="Amt-3" data-name="Amt" transform="translate(0.421)">
              <text id="_1200" data-name="1200" transform="translate(883.079 894)" fill="#fff" fontSize="32" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600">
                <tspan x="0" y="0">
                  {!incentivesTemp?.[2]?.incentive ? 0 : incentivesTemp?.[2]?.incentive}
                </tspan>
              </text>
              <path id="Icon_awesome-rupee-sign-3" data-name="Icon awesome-rupee-sign" d="M17.4,5.866a.678.678,0,0,0,.678-.678V2.928A.678.678,0,0,0,17.4,2.25H.678A.678.678,0,0,0,0,2.928V5.456a.678.678,0,0,0,.678.678H5.5A4.076,4.076,0,0,1,8.94,7.674H.678A.678.678,0,0,0,0,8.352v2.26a.678.678,0,0,0,.678.678H9.647A3.9,3.9,0,0,1,5.424,14.6H.678A.678.678,0,0,0,0,15.28v2.995a.678.678,0,0,0,.218.5L9.543,27.38a.678.678,0,0,0,.46.18h4.664a.678.678,0,0,0,.46-1.176L6.6,18.515a7.74,7.74,0,0,0,7.814-7.226H17.4a.678.678,0,0,0,.678-.678V8.352a.678.678,0,0,0-.678-.678H14.085a7.739,7.739,0,0,0-.805-1.808Z" transform="translate(860 867.93)" fill="#fff" stroke="#37bdc8" strokeWidth="1" />
            </g>
          </g>
          <g id="In_4" data-name="In 4" transform="translate(647.579 22)">
            <g id="Trips-7" data-name="Trips" transform="translate(0.421)">
              <text id="Trips-8" data-name="Trips" transform="translate(903 858)" fill="#86a1a4" fontSize="18" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="16" y="0">Trips</tspan></text>
              <text id="_120" data-name="120" transform="translate(860 859)" fill="#333" fontSize="22" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600">
                <tspan x="0" y="0">
                  {!incentivesTemp?.[3]?.no_of_trips ? 0 : incentivesTemp?.[3]?.no_of_trips}
                </tspan>
              </text>
            </g>
            <g id="Amt-4" data-name="Amt" transform="translate(0.421)">
              <text id="_1600" data-name="1600" transform="translate(883.079 894)" fill="#013453" fontSize="32" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600">
                <tspan x="0" y="0">
                  {!incentivesTemp?.[3]?.incentive ? 0 : incentivesTemp?.[3]?.incentive}
                </tspan>
              </text>
              <path id="Icon_awesome-rupee-sign-4" data-name="Icon awesome-rupee-sign" d="M17.4,5.866a.678.678,0,0,0,.678-.678V2.928A.678.678,0,0,0,17.4,2.25H.678A.678.678,0,0,0,0,2.928V5.456a.678.678,0,0,0,.678.678H5.5A4.076,4.076,0,0,1,8.94,7.674H.678A.678.678,0,0,0,0,8.352v2.26a.678.678,0,0,0,.678.678H9.647A3.9,3.9,0,0,1,5.424,14.6H.678A.678.678,0,0,0,0,15.28v2.995a.678.678,0,0,0,.218.5L9.543,27.38a.678.678,0,0,0,.46.18h4.664a.678.678,0,0,0,.46-1.176L6.6,18.515a7.74,7.74,0,0,0,7.814-7.226H17.4a.678.678,0,0,0,.678-.678V8.352a.678.678,0,0,0-.678-.678H14.085a7.739,7.739,0,0,0-.805-1.808Z" transform="translate(860 867.93)" fill="#013453" stroke="#fff" strokeWidth="1" />
            </g>
          </g>
          <g id="In_5" data-name="In 5" transform="translate(866.579 22)">
            <g id="Trips-9" data-name="Trips" transform="translate(0.421)">
              <text id="Trips-10" data-name="Trips" transform="translate(903 858)" fill="#86a1a4" fontSize="18" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="16" y="0">Trips</tspan></text>
              <text id="_150" data-name="150" transform="translate(860 859)" fill="#333" fontSize="22" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600">
                <tspan x="0" y="0">
                  {!incentivesTemp?.[4]?.no_of_trips ? 0 : incentivesTemp?.[4]?.no_of_trips}
                </tspan>
              </text>
            </g>
            <g id="Amt-5" data-name="Amt" transform="translate(0.421)">
              <text id="_1800" data-name="1800" transform="translate(883.079 894)" fill="#013453" fontSize="32" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600">
                <tspan x="0" y="0">
                  {!incentivesTemp?.[4]?.incentive ? 0 : incentivesTemp?.[4]?.incentive}
                </tspan>
              </text>
              <path id="Icon_awesome-rupee-sign-5" data-name="Icon awesome-rupee-sign" d="M17.4,5.866a.678.678,0,0,0,.678-.678V2.928A.678.678,0,0,0,17.4,2.25H.678A.678.678,0,0,0,0,2.928V5.456a.678.678,0,0,0,.678.678H5.5A4.076,4.076,0,0,1,8.94,7.674H.678A.678.678,0,0,0,0,8.352v2.26a.678.678,0,0,0,.678.678H9.647A3.9,3.9,0,0,1,5.424,14.6H.678A.678.678,0,0,0,0,15.28v2.995a.678.678,0,0,0,.218.5L9.543,27.38a.678.678,0,0,0,.46.18h4.664a.678.678,0,0,0,.46-1.176L6.6,18.515a7.74,7.74,0,0,0,7.814-7.226H17.4a.678.678,0,0,0,.678-.678V8.352a.678.678,0,0,0-.678-.678H14.085a7.739,7.739,0,0,0-.805-1.808Z" transform="translate(860 867.93)" fill="#013453" stroke="#fff" strokeWidth="1" />
            </g>
          </g>
          <g id="Graph">
            <path id="Path_605" data-name="Path 605" d="M1121,4710.145V4547.479s81,9.353,111.628,26.343,151.96,10.323,177.4,18.527,72.875-1.234,120.428,0,122.281,8.029,122.281,8.029l345.537,4.94h149.146V4660.9H1652.738s-87.542,12.043-122.281,10.653-98.659-.926-110.238,6.021-116.723,4.169-116.723,4.169-72.72-.927-85.689,10.653S1121,4710.145,1121,4710.145Z" transform="translate(-290.921 -3583.145)" fill="#f1f0f1" />
            <path id="Path_606" data-name="Path 606" d="M1121,4697.145V4560.479s81,9.353,111.628,26.343,151.96,10.323,177.4,18.527,72.875-1.234,120.428,0,122.281,8.029,122.281,8.029l345.537,4.94h149.146V4647.9H1652.738s-87.542,12.043-122.281,10.653-98.659-.926-110.238,6.021-116.723,4.169-116.723,4.169-72.72-.927-85.689,10.653S1121,4697.145,1121,4697.145Z" transform="translate(-290.921 -3583.479)" fill="#e7eaea" />
            <g id="Mask_Group_16" data-name="Mask Group 16" transform="translate(0 13)" clipPath="url(#clip-path)">
              <path id="Path_607" data-name="Path 607" d="M1121,4697.145V4560.479s81,9.353,111.628,26.343,151.96,10.323,177.4,18.527,72.875-1.234,120.428,0,122.281,8.029,122.281,8.029l345.537,4.94h149.146V4647.9H1652.738s-87.542,12.043-122.281,10.653-98.659-.926-110.238,6.021-116.723,4.169-116.723,4.169-72.72-.927-85.689,10.653S1121,4697.145,1121,4697.145Z" transform="translate(-290.921 -3596.145)" fill="rgba(55,189,200,0.3)" />
            </g>
            <g id="Mask_Group_17" data-name="Mask Group 17" transform="translate(0 13)" clipPath="url(#clip-path-2)">
              <path id="Path_608" data-name="Path 608" d="M1121,4697.145V4560.479s81,9.353,111.628,26.343,151.96,10.323,177.4,18.527,72.875-1.234,120.428,0,122.281,8.029,122.281,8.029l345.537,4.94h149.146V4647.9H1652.738s-87.542,12.043-122.281,10.653-98.659-.926-110.238,6.021-116.723,4.169-116.723,4.169-72.72-.927-85.689,10.653S1121,4697.145,1121,4697.145Z" transform="translate(-290.921 -3596.145)" fill="rgba(55,189,200,0.7)" />
            </g>
            <g id="Mask_Group_18" data-name="Mask Group 18" transform="translate(0 13)" clipPath="url(#clip-path-3)">
              <path id="Path_609" data-name="Path 609" d="M1121,4697.145V4560.479s81,9.353,111.628,26.343,151.96,10.323,177.4,18.527,72.875-1.234,120.428,0,122.281,8.029,122.281,8.029l345.537,4.94h149.146V4647.9H1652.738s-87.542,12.043-122.281,10.653-98.659-.926-110.238,6.021-116.723,4.169-116.723,4.169-72.72-.927-85.689,10.653S1121,4697.145,1121,4697.145Z" transform="translate(-290.921 -3596.145)" fill="#37bdc8" />
            </g>
            <g id="Mask_Group_19" data-name="Mask Group 19" transform="translate(0 13)" clipPath="url(#clip-path-4)">
              <path id="Path_610" data-name="Path 610" d="M1121,4697.145V4560.479s81,9.353,111.628,26.343,151.96,10.323,177.4,18.527,72.875-1.234,120.428,0,122.281,8.029,122.281,8.029l345.537,4.94h149.146V4647.9H1652.738s-87.542,12.043-122.281,10.653-98.659-.926-110.238,6.021-116.723,4.169-116.723,4.169-72.72-.927-85.689,10.653S1121,4697.145,1121,4697.145Z" transform="translate(-290.921 -3596.145)" fill="#1da0ab" />
            </g>
            <g id="Mask_Group_20" data-name="Mask Group 20" transform="translate(0 13)" clipPath="url(#clip-path-5)">
              <path id="Path_611" data-name="Path 611" d="M1121,4697.145V4560.479s81,9.353,111.628,26.343,151.96,10.323,177.4,18.527,72.875-1.234,120.428,0,122.281,8.029,122.281,8.029l345.537,4.94h149.146V4647.9H1652.738s-87.542,12.043-122.281,10.653-98.659-.926-110.238,6.021-116.723,4.169-116.723,4.169-72.72-.927-85.689,10.653S1121,4697.145,1121,4697.145Z" transform="translate(-290.921 -3596.145)" fill="#128a94" />
            </g>
            <text id="_20" data-name="20" transform="translate(890 1053)" fill="#fff" fontSize="20" fontFamily="Montserrat-Light, Montserrat" fontWeight="300">
              <tspan x="0" y="0">
                {countCarsFun(incentivesTemp?.[0]?.no_of_trips, incentivesTemp?.[1]?.no_of_trips)}
              </tspan>
            </text>
            <text id="_10" data-name="10" transform="translate(1107 1053)" fill="#fff" fontSize="20" fontFamily="Montserrat-Light, Montserrat" fontWeight="300">
              <tspan x="0" y="0">
                {countCarsFun(incentivesTemp?.[1]?.no_of_trips, incentivesTemp?.[2]?.no_of_trips)}
              </tspan>
            </text>
            <text id="_50" data-name="50" transform="translate(1325 1053)" fill="#fff" fontSize="20" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600">
              <tspan x="0" y="0">
                {countCarsFun(incentivesTemp?.[2]?.no_of_trips, incentivesTemp?.[3]?.no_of_trips)}
              </tspan>
            </text>
            <text id="_40-2" data-name="40" transform="translate(1543 1054)" fill="#fff" fontSize="20" fontFamily="Montserrat-Light, Montserrat" fontWeight="300">
              <tspan x="0" y="0">
                {countCarsFun(incentivesTemp?.[3]?.no_of_trips, incentivesTemp?.[4]?.no_of_trips)}
              </tspan>
            </text>
            <text id="_15" data-name="15" transform="translate(1767 1054)" fill="#fff" fontSize="20" fontFamily="Montserrat-Light, Montserrat" fontWeight="300">
              <tspan x="0" y="0">
                {countCarsFun(incentivesTemp?.[4]?.no_of_trips, incentivesTemp?.[4]?.no_of_trips)}
              </tspan>
            </text>
          </g>
          <g id="Cars_Crossed" data-name="Cars Crossed" transform="translate(915.279 1121.476)">
            <text id="_50-2" data-name="50" transform="translate(207.721 22.525)" fill="#013453" fontSize="32" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600">
              <tspan x="0" y="0">
                {countCarsFun(incentivesTemp?.[2]?.no_of_trips, incentivesTemp?.[3]?.no_of_trips)}
              </tspan>
            </text>
            <text id="Cars_are_qualified_for" data-name="Cars are qualified for" transform="translate(251.721 17.525)" fill="#013453" fontSize="18" fontFamily="Montserrat-Bold, Montserrat" fontWeight="700">
              <tspan x="5" y="0">Cars</tspan>
              <tspan y="0" xmlSpace="preserve" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"> are qualified for</tspan>
            </text>
            <g id="Incentives-2" data-name="Incentives">
              <text id="_1200-2" data-name="1200" transform="translate(473.721 22.524)" fill="#013453" fontSize="32" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600">
                <tspan x="0" y="0">
                  {!incentivesTemp?.[2]?.incentive ? 0 : incentivesTemp?.[2]?.incentive}
                </tspan>
              </text>
              <text id="Incentives-3" data-name="Incentives" transform="translate(553.721 17.524)" fill="#013453" fontSize="18" fontFamily="Montserrat-Bold, Montserrat" fontWeight="700"><tspan x="20" y="0">Incentives</tspan></text>
              <path id="Icon_awesome-rupee-sign-6" data-name="Icon awesome-rupee-sign" d="M17.4,5.866a.678.678,0,0,0,.678-.678V2.928A.678.678,0,0,0,17.4,2.25H.678A.678.678,0,0,0,0,2.928V5.456a.678.678,0,0,0,.678.678H5.5A4.076,4.076,0,0,1,8.94,7.674H.678A.678.678,0,0,0,0,8.352v2.26a.678.678,0,0,0,.678.678H9.647A3.9,3.9,0,0,1,5.424,14.6H.678A.678.678,0,0,0,0,15.28v2.995a.678.678,0,0,0,.218.5L9.543,27.38a.678.678,0,0,0,.46.18h4.664a.678.678,0,0,0,.46-1.176L6.6,18.515a7.74,7.74,0,0,0,7.814-7.226H17.4a.678.678,0,0,0,.678-.678V8.352a.678.678,0,0,0-.678-.678H14.085a7.739,7.739,0,0,0-.805-1.808Z" transform="translate(450.643 -3.545)" fill="#013453" stroke="#fff" strokeWidth="1" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
export default CarDetails;
