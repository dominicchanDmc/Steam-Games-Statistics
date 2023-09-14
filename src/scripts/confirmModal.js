class confirmModal {
    constructor() {
        this.modal = document.getElementById("confirmModal");
        this.modalMessageElement = document.getElementById("confirmModalMessage");
        this.confirmBtn = document.getElementById("confirmModalconfirmBtn");
        this.cancelBtn = document.getElementById("confirmModalcancelBtn");

        this.confirmCallback = null;
        this.cancelCallback = null;

        this.confirmBtn.addEventListener("click", () => {
            if (this.confirmCallback && typeof this.confirmCallback === "function") {
                this.confirmCallback();
            }
            this.close();
        });

        this.cancelBtn.addEventListener("click", () => {
            if (this.cancelCallback && typeof this.cancelCallback === "function") {
                this.cancelCallback();
            }
            this.close();
        });
    }

    open(message, onConfirm, onCancel) {
        this.modalMessageElement.textContent = message;
        this.confirmCallback = onConfirm;
        this.cancelCallback = onCancel;
        this.modal.style.display = "block";
    }

    close() {
        this.modal.style.display = "none";
        this.confirmCallback = null;
        this.cancelCallback = null;
    }
}

export default confirmModal;