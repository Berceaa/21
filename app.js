/**
 * Global application state declaration for People21 B Corp Prototype.
 * Powered cleanly by Alpine.js architecture.
 */
function playbookState() {
    return {
        currentTab: 'overview',
        deptFilter: 'leadership',
        evidenceFilter: 'all',
        
        // Module 2 Status Map Setup
        diagnosticScores: { 
            leadership: 'ready', 
            ownership: 'progress', 
            doc: 'gap', 
            data: 'progress' 
        },

        // Module 5 Complete Data Array Store
        evidenceData: [
            { id: 1, name: 'Articles of Association / Mission Lock Amendment', dept: 'legal', status: 'informal' },
            { id: 2, name: 'Pay Equity / Demographic Disparity Metrics', dept: 'hr', status: 'missing' },
            { id: 3, name: 'Localized Supply Chain Expenditure Matrix', dept: 'procurement', status: 'documented' },
            { id: 4, name: 'Whistleblower Protection & Ethical Conduct Policy', dept: 'legal', status: 'verified' },
            { id: 5, name: 'Utility Carbon Tracking & Facility Energy Audits', dept: 'housing', status: 'missing' },
            { id: 6, name: 'Client ESG RFP Standard Response Framework', dept: 'sales', status: 'informal' }
        ],

        /**
         * Dynamic State Switcher for Readiness Diagnostic Module
         */
        toggleDiagnostic(key) {
            const cycleMap = { 'ready': 'progress', 'progress': 'gap', 'gap': 'ready' };
            this.diagnosticScores[key] = cycleMap[this.diagnosticScores[key]] || 'ready';
        },

        /**
         * State loop configuration for Evidence Hub Status Badges
         */
        toggleEvidenceStatus(id) {
            const item = this.evidenceData.find(e => e.id === id);
            if (item) {
                const statusOrder = ['missing', 'informal', 'documented', 'verified'];
                let nextIndex = (statusOrder.indexOf(item.status) + 1) % statusOrder.length;
                item.status = statusOrder[nextIndex];
            }
        },

        /**
         * Maps Tailwind class distributions dynamically for Diagnostic statuses
         */
        getDiagnosticClass(status) {
            return {
                'text-emerald-700 bg-emerald-50 border-emerald-300': status === 'ready',
                'text-amber-700 bg-amber-50 border-amber-300': status === 'progress',
                'text-rose-700 bg-rose-50 border-rose-300': status === 'gap'
            };
        },

        /**
         * Maps Tailwind class distributions dynamically for Evidence Hub statuses
         */
        getEvidenceClass(status) {
            return {
                'text-amber-600 bg-amber-50/60 border-amber-300': status === 'informal',
                'text-rose-600 bg-rose-50/60 border-rose-300': status === 'missing',
                'text-blue-600 bg-blue-50/60 border-blue-300': status === 'documented',
                'text-emerald-700 bg-emerald-50/60 border-emerald-300': status === 'verified'
            };
        }
    };
}