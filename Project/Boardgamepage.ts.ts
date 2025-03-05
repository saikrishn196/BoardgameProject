export class Boardgamepage{
get Title(){
return new EPSearchBoxTCO({
id: 'advsearch-title'
}
)}
get YearPublishedMin(){
return new EPSearchBoxTCO({
id: 'advsearch-yearpublished-min'
}
)}
get YearPublishedMax(){
return new EPSearchBoxTCO({
id: 'advsearch-yearpublished-max'
}
)}
get Submitbtn(){
return new EPButtonTCO({
name: 'B1'
}
)}
