class MembershipSelector extends HTMLElement {
  constructor() {
    super();

    this.select = this.querySelector('#membership__selection');
    this.link = this.querySelector('a');
    this.errorMsg = this.querySelector('.membership__error');

    this.select.addEventListener('change', (event) => {
      this.membershipChange(this.select.value);
    });

    this.link.addEventListener('click', this.navigateToMembership.bind(this));
  }

  connectedCallback() {
    if (this.select.value) {
      this.membershipChange(this.select.value);
    }
  }

  //----------------------------------------------------------------------------
  // Event Handlers

  membershipChange(membership) {
    this.updateLink(membership);
  }

  updateLink(url) {
    this.link.href = url;
  }

  navigateToMembership(event) {
    event.preventDefault();
    const href = this.link.attributes.href.value;

    if (href && href !== "#") {
      window.location = this.link.href;
    } else {
      this.errorMsg.textContent = "Please select a membership.";
    }
  }
}

customElements.define("membership-selector", MembershipSelector);
