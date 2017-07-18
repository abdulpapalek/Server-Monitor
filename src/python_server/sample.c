#include <iostream>
#include <stdlib.h> //srand, rand
#include <string>

int main(){
  char box[20]={};
  char boxremoved[20]={};
  char letter = 0;
  char prevletter = 0;
  int openBoxCtr=0;
  int boxToOpen = 0;
  int numberoftries =  0;
  int numberofboxremoved = 0;
    _createandpopulatebox(box);
    Scanner:
        prevletter = letter;
       if(numberofboxremoved == 20 && numberoftries < 40){
          std::cout << "You Win!" << endl;
          return 1;
        }
        else if(numberoftries == 40){
          std::cout << "You Lose, better luck next time!" << endl;
          return 0;
        }
        else{
          //do nothing
        }
        std::cout << "Choose which box to open: " << endl;
        for(openBoxCtr = 0; openBoxCtr < 20; openBoxCtr++){
          if(boxremoved[openBoxCtr]==1){
            std::cout << openBoxCtr+1 << endl;
          }
          else{
            //do nothing
          }
        }
        std::cin >> boxToOpen;//assuming the user always inputs numbers greater than 0 and less than 20
        letter = box[boxToOpen-1];
        std::cout << "the letter is:  " << letter << endl;
        clearScreen();
        if(prevletter == letter){
          _boxtoremove(letter,box,boxremoved);
          numberofboxremoved +2;//assuming 2 boxes will always be removed.
        }
        numberoftries++;
    goto Scanner;

    return 1;
}
void _createandpopulatebox(char box[]){
  char listset[20]={a,a,b,b,c,c,d,d,e,e,f,f,g,g,h,h,i,i,j,j};
  int ctr;

  for(ctr = 0;ctr < 20; ctr++){
    box[ctr] = listset[rand()%20];
  }  
}
void _boxtoremove(char letter,char box[],char boxremoved[]){
  int ctr;
  for(ctr = 0; ctr < 20; ctr++){
    if(letter == box[ctr]){
      boxremoved[ctr]=1;
    }
  }
}
