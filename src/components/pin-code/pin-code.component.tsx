import { Component, State, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'pin-code',
  styleUrl: 'pin-code.css',
  shadow: true
})
export class PinCode {
  @Prop() fieldsNumber = 4;
  @Event() enter: EventEmitter<string>;

  @State() private currentInput: string = '';
  @State() private currentCaretIndex = 0;

  private textInputRef?: HTMLInputElement;

  constructor() {
    this.focusTextInput = this.focusTextInput.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  componentDidLoad() {
    this.focusTextInput();
  }

  private focusTextInput() {
    this.textInputRef.focus();
  }

  private onKeyDown(event: KeyboardEvent) {
    this.updateCaret(event);
  }

  private onKeyUp(event: KeyboardEvent) {
    this.updateCaret(event)
  }

  private getCaretIndex(start: number, end: number, direction: string): number {
    if (start === end) {
      return start;
    }
    if (direction === "forward") {
      return start;
    } else {
      return end;
    }
  }

  private updateCaret(event: Event) {
    const inputField = event.target as HTMLInputElement;
    const { selectionStart, selectionEnd, selectionDirection } = inputField;
    this.currentCaretIndex = this.getCaretIndex(selectionStart, selectionEnd, selectionDirection);
  }

  private handleChange = (event: InputEvent) => {
    const inputField = event.target as HTMLInputElement;
    this.currentInput = inputField.value || '';

    if (this.currentInput.length >= this.fieldsNumber) {
      this.enter.emit(this.currentInput);
      this.textInputRef.value = '';
      this.currentInput = '';
      this.currentCaretIndex = 0;
    }
  }

  private updateRef = (el) => {
    this.textInputRef = el as HTMLInputElement;
  }

  render() {
    return (
      <div class="container" onClick={this.focusTextInput}>
        <textarea inputmode="numeric" ref={this.updateRef} class="hidden-input" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} onInput={this.handleChange} />
        {[...Array(this.fieldsNumber)].map((_el, index) => (
          <div class="field">
            <div key={index} class="fake-input">
              <p class={`fake-value ${this.currentCaretIndex === index ? 'fake-caret' : ''}`}>{this.currentInput[index] || '\u00A0'}</p>
            </div>
          </div>
        ))}
      </div>);
  }
}
