import React from 'react';

const Modal = () => (
  <div
    className="modal fade"
    id="myModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h4 className="modal-title" id="myModalLabel">
            提示
          </h4>
        </div>
        <div className="modal-body">提交成功</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default"
            data-dismiss="modal"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;

