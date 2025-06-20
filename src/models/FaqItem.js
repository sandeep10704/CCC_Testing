

class FaqItem {
  constructor(question, answer) {
    this.question = question.trim();
    this.answer = answer.trim();
  }

  getFormattedQuestion() {
    return this.question.toUpperCase();
  }

  getFormattedAnswer() {
    return this.answer.charAt(0).toUpperCase() + this.answer.slice(1);
  }

  static fromJsonArray(jsonArray) {
    return jsonArray.map(item => new FaqItem(item.question, item.answer));
  }
}

export default FaqItem;