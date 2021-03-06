import BigCarImg from '../../../../../assets/images/bigCarImg.jpg';

const CarAndDaysReport = ({ driverData = [] }) => {
  const driverDetails = driverData?.[0];
  return (
    <div className="row p-2">
      <div className="col-6">
        <img alt="BigCarImg" src={BigCarImg} style={{ height: '290px' }} />
      </div>
      <div className="col-6 d-flex flex-row">
        <div className="row">
          <div className="col-6 d-flex flex-row justify-content-center pt-4">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#37BDC8" style={{ color: '#37BDC8' }} width={150} height={100} viewBox="0 0 58.066 40.067">
                <g style={{ color: '#37BDC8' }} id="icon" transform="translate(-1091.783 -2451.631)">
                  <path style={{ color: '#37BDC8' }} id="Path_642" data-name="Path 642" d="M1149.85,2482.477c-.107.821-.159,1.654-.332,2.461-.369,1.716-.761,3.428-1.221,5.122a1.648,1.648,0,0,1-2.178,1.168,1.686,1.686,0,0,1-1.067-2.2,27.779,27.779,0,0,0,1.233-5.872c.018-.206.038-.413.063-.69-.225-.01-.424-.026-.623-.026-1.474,0-2.949.007-4.423,0a1.741,1.741,0,0,1-1.9-1.426,1.715,1.715,0,0,1,1.81-2.024c1.058-.024,2.117-.006,3.175-.006h1.953a25.179,25.179,0,0,0-2.555-9.565c-1.421.821-2.807,1.628-4.2,2.419a3.214,3.214,0,0,1-.928.4,1.7,1.7,0,0,1-1.148-3.15c1.313-.786,2.645-1.539,3.969-2.307.178-.1.352-.214.579-.353a25.624,25.624,0,0,0-6.987-7c-.836,1.448-1.634,2.841-2.446,4.226a3.236,3.236,0,0,1-.572.767,1.668,1.668,0,0,1-2.185.036,1.7,1.7,0,0,1-.386-2.2c.735-1.322,1.5-2.625,2.258-3.936.1-.18.2-.361.349-.615a25.234,25.234,0,0,0-9.56-2.57v.642c0,1.515.007,3.03,0,4.545a1.71,1.71,0,1,1-3.414.01c-.012-1.515,0-3.03,0-4.545v-.647a25.294,25.294,0,0,0-9.563,2.562c.347.607.67,1.176,1,1.743.528.918,1.07,1.828,1.582,2.755a1.714,1.714,0,1,1-2.964,1.713c-.746-1.25-1.459-2.52-2.186-3.781-.122-.212-.249-.421-.409-.691a25.686,25.686,0,0,0-6.981,6.979c.169.107.318.209.474.3,1.355.788,2.717,1.566,4.066,2.365a1.626,1.626,0,0,1,.829,1.73,1.609,1.609,0,0,1-1.13,1.365,1.841,1.841,0,0,1-1.62-.241c-1.272-.745-2.55-1.478-3.826-2.215-.162-.094-.328-.183-.529-.3a25.558,25.558,0,0,0-2.563,9.559h.641c1.474,0,2.949-.009,4.423,0a1.734,1.734,0,0,1,1.886,1.443,1.711,1.711,0,0,1-1.825,2.007c-1.285.023-2.57.005-3.856.006h-1.3c.153,1.077.24,2.109.458,3.112.281,1.29.66,2.559,1.014,3.833a1.716,1.716,0,1,1-3.267,1.037,28.469,28.469,0,0,1-1.525-6.849,27.958,27.958,0,0,1,2.467-14.882c4.4-9.227,11.616-14.984,21.714-16.627,10.2-1.66,18.979,1.455,26.077,8.992a27.838,27.838,0,0,1,7.45,16.216c.066.561.143,1.12.215,1.68Z" transform="translate(0 0)" />
                </g>
              </svg>
              <div style={{
                marginTop: '-65px', marginLeft: '27px', textAlign: 'center', width: '95px',
              }}
              >
                <p style={{ fontSize: '12px' }} className="text-[#86A1A4] font-bold m-0">
                  Average
                  <br />
                  Trips per day
                </p>
                <p className="text-[#013453] font-bold m-0" style={{ fontSize: '16px' }}>{driverDetails?.avg_trips || 0}</p>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex flex-row justify-content-center pt-4">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#37BDC8" style={{ color: '#37BDC8' }} width={150} height={100} viewBox="0 0 58.066 40.067">
                <g style={{ color: '#37BDC8' }} id="icon" transform="translate(-1091.783 -2451.631)">
                  <path style={{ color: '#37BDC8' }} id="Path_642" data-name="Path 642" d="M1149.85,2482.477c-.107.821-.159,1.654-.332,2.461-.369,1.716-.761,3.428-1.221,5.122a1.648,1.648,0,0,1-2.178,1.168,1.686,1.686,0,0,1-1.067-2.2,27.779,27.779,0,0,0,1.233-5.872c.018-.206.038-.413.063-.69-.225-.01-.424-.026-.623-.026-1.474,0-2.949.007-4.423,0a1.741,1.741,0,0,1-1.9-1.426,1.715,1.715,0,0,1,1.81-2.024c1.058-.024,2.117-.006,3.175-.006h1.953a25.179,25.179,0,0,0-2.555-9.565c-1.421.821-2.807,1.628-4.2,2.419a3.214,3.214,0,0,1-.928.4,1.7,1.7,0,0,1-1.148-3.15c1.313-.786,2.645-1.539,3.969-2.307.178-.1.352-.214.579-.353a25.624,25.624,0,0,0-6.987-7c-.836,1.448-1.634,2.841-2.446,4.226a3.236,3.236,0,0,1-.572.767,1.668,1.668,0,0,1-2.185.036,1.7,1.7,0,0,1-.386-2.2c.735-1.322,1.5-2.625,2.258-3.936.1-.18.2-.361.349-.615a25.234,25.234,0,0,0-9.56-2.57v.642c0,1.515.007,3.03,0,4.545a1.71,1.71,0,1,1-3.414.01c-.012-1.515,0-3.03,0-4.545v-.647a25.294,25.294,0,0,0-9.563,2.562c.347.607.67,1.176,1,1.743.528.918,1.07,1.828,1.582,2.755a1.714,1.714,0,1,1-2.964,1.713c-.746-1.25-1.459-2.52-2.186-3.781-.122-.212-.249-.421-.409-.691a25.686,25.686,0,0,0-6.981,6.979c.169.107.318.209.474.3,1.355.788,2.717,1.566,4.066,2.365a1.626,1.626,0,0,1,.829,1.73,1.609,1.609,0,0,1-1.13,1.365,1.841,1.841,0,0,1-1.62-.241c-1.272-.745-2.55-1.478-3.826-2.215-.162-.094-.328-.183-.529-.3a25.558,25.558,0,0,0-2.563,9.559h.641c1.474,0,2.949-.009,4.423,0a1.734,1.734,0,0,1,1.886,1.443,1.711,1.711,0,0,1-1.825,2.007c-1.285.023-2.57.005-3.856.006h-1.3c.153,1.077.24,2.109.458,3.112.281,1.29.66,2.559,1.014,3.833a1.716,1.716,0,1,1-3.267,1.037,28.469,28.469,0,0,1-1.525-6.849,27.958,27.958,0,0,1,2.467-14.882c4.4-9.227,11.616-14.984,21.714-16.627,10.2-1.66,18.979,1.455,26.077,8.992a27.838,27.838,0,0,1,7.45,16.216c.066.561.143,1.12.215,1.68Z" transform="translate(0 0)" />
                </g>
              </svg>
              <div style={{
                marginTop: '-65px', marginLeft: '27px', textAlign: 'center', width: '95px',
              }}
              >
                <p style={{ fontSize: '12px' }} className="text-[#86A1A4] font-bold m-0">
                  Average
                  <br />
                  Revenue per day
                </p>
                <p className="text-[#013453] font-bold m-0" style={{ fontSize: '16px' }}>
                  ???
                  {' '}
                  {driverDetails?.avg_revenue?.toFixed(1) || 0}
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex flex-row justify-content-center">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#37BDC8" style={{ color: '#37BDC8' }} width={150} height={100} viewBox="0 0 58.066 40.067">
                <g style={{ color: '#37BDC8' }} id="icon" transform="translate(-1091.783 -2451.631)">
                  <path style={{ color: '#37BDC8' }} id="Path_642" data-name="Path 642" d="M1149.85,2482.477c-.107.821-.159,1.654-.332,2.461-.369,1.716-.761,3.428-1.221,5.122a1.648,1.648,0,0,1-2.178,1.168,1.686,1.686,0,0,1-1.067-2.2,27.779,27.779,0,0,0,1.233-5.872c.018-.206.038-.413.063-.69-.225-.01-.424-.026-.623-.026-1.474,0-2.949.007-4.423,0a1.741,1.741,0,0,1-1.9-1.426,1.715,1.715,0,0,1,1.81-2.024c1.058-.024,2.117-.006,3.175-.006h1.953a25.179,25.179,0,0,0-2.555-9.565c-1.421.821-2.807,1.628-4.2,2.419a3.214,3.214,0,0,1-.928.4,1.7,1.7,0,0,1-1.148-3.15c1.313-.786,2.645-1.539,3.969-2.307.178-.1.352-.214.579-.353a25.624,25.624,0,0,0-6.987-7c-.836,1.448-1.634,2.841-2.446,4.226a3.236,3.236,0,0,1-.572.767,1.668,1.668,0,0,1-2.185.036,1.7,1.7,0,0,1-.386-2.2c.735-1.322,1.5-2.625,2.258-3.936.1-.18.2-.361.349-.615a25.234,25.234,0,0,0-9.56-2.57v.642c0,1.515.007,3.03,0,4.545a1.71,1.71,0,1,1-3.414.01c-.012-1.515,0-3.03,0-4.545v-.647a25.294,25.294,0,0,0-9.563,2.562c.347.607.67,1.176,1,1.743.528.918,1.07,1.828,1.582,2.755a1.714,1.714,0,1,1-2.964,1.713c-.746-1.25-1.459-2.52-2.186-3.781-.122-.212-.249-.421-.409-.691a25.686,25.686,0,0,0-6.981,6.979c.169.107.318.209.474.3,1.355.788,2.717,1.566,4.066,2.365a1.626,1.626,0,0,1,.829,1.73,1.609,1.609,0,0,1-1.13,1.365,1.841,1.841,0,0,1-1.62-.241c-1.272-.745-2.55-1.478-3.826-2.215-.162-.094-.328-.183-.529-.3a25.558,25.558,0,0,0-2.563,9.559h.641c1.474,0,2.949-.009,4.423,0a1.734,1.734,0,0,1,1.886,1.443,1.711,1.711,0,0,1-1.825,2.007c-1.285.023-2.57.005-3.856.006h-1.3c.153,1.077.24,2.109.458,3.112.281,1.29.66,2.559,1.014,3.833a1.716,1.716,0,1,1-3.267,1.037,28.469,28.469,0,0,1-1.525-6.849,27.958,27.958,0,0,1,2.467-14.882c4.4-9.227,11.616-14.984,21.714-16.627,10.2-1.66,18.979,1.455,26.077,8.992a27.838,27.838,0,0,1,7.45,16.216c.066.561.143,1.12.215,1.68Z" transform="translate(0 0)" />
                </g>
              </svg>
              <div style={{
                marginTop: '-65px', marginLeft: '27px', textAlign: 'center', width: '95px',
              }}
              >
                <p style={{ fontSize: '12px' }} className="text-[#86A1A4] font-bold m-0">
                  Average
                  <br />
                  Online Hours
                </p>
                <p className="text-[#013453] font-bold m-0" style={{ fontSize: '16px' }}>
                  {driverDetails?.avg_online_hours?.toFixed(1) || 0}
                  {' '}
                  hrs
                </p>
              </div>
            </div>
          </div>
          <div className="col-6  d-flex flex-row justify-content-center">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#37BDC8" style={{ color: '#37BDC8' }} width={150} height={100} viewBox="0 0 58.066 40.067">
                <g style={{ color: '#37BDC8' }} id="icon" transform="translate(-1091.783 -2451.631)">
                  <path style={{ color: '#37BDC8' }} id="Path_642" data-name="Path 642" d="M1149.85,2482.477c-.107.821-.159,1.654-.332,2.461-.369,1.716-.761,3.428-1.221,5.122a1.648,1.648,0,0,1-2.178,1.168,1.686,1.686,0,0,1-1.067-2.2,27.779,27.779,0,0,0,1.233-5.872c.018-.206.038-.413.063-.69-.225-.01-.424-.026-.623-.026-1.474,0-2.949.007-4.423,0a1.741,1.741,0,0,1-1.9-1.426,1.715,1.715,0,0,1,1.81-2.024c1.058-.024,2.117-.006,3.175-.006h1.953a25.179,25.179,0,0,0-2.555-9.565c-1.421.821-2.807,1.628-4.2,2.419a3.214,3.214,0,0,1-.928.4,1.7,1.7,0,0,1-1.148-3.15c1.313-.786,2.645-1.539,3.969-2.307.178-.1.352-.214.579-.353a25.624,25.624,0,0,0-6.987-7c-.836,1.448-1.634,2.841-2.446,4.226a3.236,3.236,0,0,1-.572.767,1.668,1.668,0,0,1-2.185.036,1.7,1.7,0,0,1-.386-2.2c.735-1.322,1.5-2.625,2.258-3.936.1-.18.2-.361.349-.615a25.234,25.234,0,0,0-9.56-2.57v.642c0,1.515.007,3.03,0,4.545a1.71,1.71,0,1,1-3.414.01c-.012-1.515,0-3.03,0-4.545v-.647a25.294,25.294,0,0,0-9.563,2.562c.347.607.67,1.176,1,1.743.528.918,1.07,1.828,1.582,2.755a1.714,1.714,0,1,1-2.964,1.713c-.746-1.25-1.459-2.52-2.186-3.781-.122-.212-.249-.421-.409-.691a25.686,25.686,0,0,0-6.981,6.979c.169.107.318.209.474.3,1.355.788,2.717,1.566,4.066,2.365a1.626,1.626,0,0,1,.829,1.73,1.609,1.609,0,0,1-1.13,1.365,1.841,1.841,0,0,1-1.62-.241c-1.272-.745-2.55-1.478-3.826-2.215-.162-.094-.328-.183-.529-.3a25.558,25.558,0,0,0-2.563,9.559h.641c1.474,0,2.949-.009,4.423,0a1.734,1.734,0,0,1,1.886,1.443,1.711,1.711,0,0,1-1.825,2.007c-1.285.023-2.57.005-3.856.006h-1.3c.153,1.077.24,2.109.458,3.112.281,1.29.66,2.559,1.014,3.833a1.716,1.716,0,1,1-3.267,1.037,28.469,28.469,0,0,1-1.525-6.849,27.958,27.958,0,0,1,2.467-14.882c4.4-9.227,11.616-14.984,21.714-16.627,10.2-1.66,18.979,1.455,26.077,8.992a27.838,27.838,0,0,1,7.45,16.216c.066.561.143,1.12.215,1.68Z" transform="translate(0 0)" />
                </g>
              </svg>
              <div style={{
                marginTop: '-65px', marginLeft: '27px', textAlign: 'center', width: '95px',
              }}
              >
                <p style={{ fontSize: '12px' }} className="text-[#86A1A4] font-bold m-0">
                  Average
                  <br />
                  trip per hours
                </p>
                <p className="text-[#013453] font-bold m-0" style={{ fontSize: '16px' }}>
                  {(driverDetails?.tph)?.toFixed(1) || 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarAndDaysReport;
