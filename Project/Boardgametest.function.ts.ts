const no=new Boardgamepage();
export class Boardgametest{
public async OpenBoardgame{
await HelperFunction.OpenModule{'https://www.boardgamegeek.com/advsearch/boardgame.com/'};
await HelperFunction.epSearchBox(no.Title,'Harry Potter and the Sorcerer's Stone Trivia Game');
await HelperFunction.epSearchBox(no.YearPublishedMin,'1999');
await HelperFunction.epSearchBox(no.YearPublishedMax,'2000');
await no.Searchbtn.click();
}
}