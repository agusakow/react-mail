export default [
    {
        'id': 'inbox',
        'title': 'Inbox',
        'messages': [ 1, 2, 3, 4, 5, 6, 7],
        'unreadedCount': 3,
        'subfolders': [
            {
                'id': 'work',
                'title': 'Work',
                'messages': [41]
            },
            {
                'id': 'tracker',
                'title': 'Tracker',
                'messages': [31, 32, 33, 34]
            },
            {
                'id': 'important',
                'title': 'Importnat',
                'messages': []
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
