let defaultSettings = {
    timeFormat: '24hr',
    todoistApiToken: '',
    latitude: null,
    longitude: null,
    tempUnit: 'fahrenheit',
    speedUnit: 'mph',
    linksPerColumn: 3,
    links: [
        { title: 'YouTube', url: 'https://youtube.com'},
        { title: 'Trading', url: 'https://alphaticks.projectx.com' },
        { title: 'Twitter', url: 'https://x.com' },
        { title: 'Notes', url: 'https://app.standardnotes.com'},
        { title: 'Mail', url: 'https://mail.proton.me' },
        { title: 'Drive', url: 'https://drive.proton.me' },
        { title: 'Calendar', url: 'https://calendar.proton.me' },
        { title: 'Docs', url: 'https://docs.proton.me' },
        { title: 'Movies', url: 'http://movieboxpro.app' },

    ],
}

function loadSettings() {
    try {
        const stored = localStorage.getItem('settings')
        if (stored) {
            const parsed = JSON.parse(stored)
            return { ...defaultSettings, ...parsed }
        }
    } catch (error) {
        console.error('failed to load settings from localStorage:', error)
    }

    return defaultSettings
}

export function saveSettings(settings) {
    try {
        localStorage.setItem('settings', JSON.stringify(settings))
    } catch (error) {
        console.error('failed to save settings to localStorage:', error)
    }
}

export const settings = $state(loadSettings())
