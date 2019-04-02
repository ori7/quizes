export interface QuizModel {
    title: string,
    questions: [
        {
            question: string,
            answers: [
                {
                    answer: string,
                    isTrue: boolean
                },
                {
                    answer: string,
                    isTrue: boolean
                },
                {
                    answer: string,
                    isTrue: boolean
                }
            ]
        }
    ]
}
