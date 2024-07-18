"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = true;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    kakaoMapScript.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          if (container) {
            const options = {
              center: new window.kakao.maps.LatLng(
                35.14825188484346,
                126.92585314955882
              ),
              level: 3,
            };

            // 1. 지도 띄우기
            const map = new window.kakao.maps.Map(container, options);

            // 2. 중앙에 핀 꽂기
            new window.kakao.maps.Marker({
              map: map,
              position: map.getCenter(),
              title: "리안소프트 109호",
            });
          } else {
            console.error("Map container not found");
          }
        });
      } else {
        console.error("Kakao maps SDK failed to load");
      }
    };

    kakaoMapScript.onerror = () => {
      console.error("Kakao maps SDK failed to load");
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "500px" }} />;
};

export default KakaoMap;
