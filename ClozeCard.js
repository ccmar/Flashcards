function ClozeCard (text, clozeDeletion);{
  if (!(this instanceof ClozeCard)){
    return new ClozeCard(text, clozeDeletion);
  }
  var clozePost = clozeDelete(text, clozeDeletion);
  this.partial = getPartial(text, clozePost);
  this.cloze = text.slice(clozePost[0], clozePost[1]);
  function getPartial(text, clozePost) {
    var start = text.slice(0, clozePost[0]);
    var end = text.slice(clozePost[1], text.length);
    return start + "..." + end;
  }
  function clozeDelete(text, clozeDeletion){
    var start = text.indexOf(clozeDeletion);
    if (start !== -1){
      return [start, start + clozeDeletion.length];
    }
  }
ClozeCard.prototype.displayCard = function displayCard() {
  return this.partial.replace(/\.\.\./, "'" + this.cloze + "'");
};
module.exports = ClozeCard;
