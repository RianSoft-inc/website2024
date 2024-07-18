import React from "react";

export default function ErrorModal({ isOpen, onClose }: any) {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <h3 className="font-bold text-lg">🚨에러 발생</h3>
          <p className="py-4">
            현재 이메일 전송 API의 유료화 전환으로 잠시 전송 기능을 <br />
            사용하기가 어렵습니다. 빠른 시일 내로 복구하겠습니다. <br />
            문의 사항은 하단의 연락처를 참고하시어 연락주시면 감사드리겠습니다.{" "}
            <br />
          </p>
          <div className="modal-action">
            <button className="btn" onClick={onClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    )
  );
}
