export default [
    {
        'id': 'inbox',
        'title': 'Inbox',
        'messages': [ 1, 2, 3, 4, 5],
        'unreadedCount': 3,
        'subfolders': [
            {
                'id': 'work',
                'title': 'Work'
            },
            {
                'id': 'tracker',
                'title': 'Tracker'
            },
            {
                'id': 'important',
                'title': 'Importnat',
                'subfolders': [
                    {
                        'id': 'work1',
                        'title': 'Work'
                    },
                    {
                        'id': 'tracker1',
                        'title': 'Tracker'
                    },
                    {
                        'id': 'important1',
                        'title': 'Importnat'
                    }
                ]
            }
        ]
    },
    {
        'id': 'trash',
        'title': 'Trash',
        'unreadedCount': 1,
        'messages': [11, 12]
    },
    {
        'id': 'spam',
        'title': 'Spam',
        'messages': [21, 22]
    }
]
