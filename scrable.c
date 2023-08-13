#include <stdio.h>
#include <ctype.h>

int letterPoints[26] = {
    1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1,
    1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};

int calculateScore(char *word)
{
    int score = 0;
    for (int i = 0; word[i] != '\0'; i++)
    {
        char c = tolower(word[i]);
        if (c >= 'a' && c <= 'z')
        {
            score += letterPoints[c - 'a'];
        }
    }
    return score;
}

int main()
{
    char word[100];
    printf("Enter a word: ");
    scanf("%s", word);

    int score = calculateScore(word);
    printf("Score: %d\n", score);

    return 0;
}
