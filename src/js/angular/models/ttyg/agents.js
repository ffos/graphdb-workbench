import {cloneDeep} from "lodash";
import {AGENTS_FILTER_ALL_KEY} from "../../ttyg/services/constants";

export class AgentModel {
    constructor(data, hashGenerator) {
        this.hashGenerator = hashGenerator;
        /**
         * Used as a marker when the agent is currently selected and was in the meantime deleted.
         * @type {boolean}
         * @private
         */
        this._isDeleted = false;
        /**
         * @type {string}
         * @private
         */
        this._id = data.id;
        /**
         * @type {string}
         * @private
         */
        this._name = data.name;
        /**
         * @type {string}
         * @private
         */
        this._repositoryId = data.repositoryId;

        this.isRepositoryDeleted = data.isRepositoryDeleted !== undefined ? data.isRepositoryDeleted: false;

        /**
         * @type {string}
         * @private
         */
        this._model = data.model;
        /**
         * @type {number}
         * @private
         */
        this._temperature = data.temperature;
        /**
         * @type {number}
         * @private
         */
        this._topP = data.topP;
        /**
         * @type {number}
         * @private
         */
        this._seed = data.seed;
        /**
         * @type {AgentInstructionsModel}
         * @private
         */
        this._instructions = data.instructions;
        /**
         * @type {ExtractionMethodModel[]}
         * @private
         */
        this._assistantExtractionMethods = data.assistantExtractionMethods;
        /**
         * @type {AdditionalExtractionMethodsModel}
         * @private
         */
        this._additionalExtractionMethods = data.additionalExtractionMethods;

        /**
         *
         * @type {AgentCompatibility.COMPATIBLE | AgentCompatibility.INCOMPATIBLE}
         * @private
         */
        this._compatibility = data.compatibility || AgentCompatibility.COMPATIBLE;

        /**
         * Indicates whether the agent is compatible with the currently running version of GraphDb.
         * @type {boolean} true if compatible otherwise false.
         * @private
         */
        this._isCompatible = this._compatibility === AgentCompatibility.COMPATIBLE;
    }

    get isDeleted() {
        return this._isDeleted;
    }

    set isDeleted(value) {
        this._isDeleted = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get repositoryId() {
        return this._repositoryId;
    }

    set repositoryId(value) {
        this._repositoryId = value;
    }

    get model() {
        return this._model;
    }

    set model(value) {
        this._model = value;
    }

    get temperature() {
        return this._temperature;
    }

    set temperature(value) {
        this._temperature = value;
    }

    get topP() {
        return this._topP;
    }

    set topP(value) {
        this._topP = value;
    }

    get seed() {
        return this._seed;
    }

    set seed(value) {
        this._seed = value;
    }

    get instructions() {
        return this._instructions;
    }

    set instructions(value) {
        this._instructions = value;
    }

    get assistantExtractionMethods() {
        return this._assistantExtractionMethods;
    }

    set assistantExtractionMethods(value) {
        this._assistantExtractionMethods = value;
    }

    get additionalExtractionMethods() {
        return this._additionalExtractionMethods;
    }

    set additionalExtractionMethods(value) {
        this._additionalExtractionMethods = value;
    }
    get compatibility() {
        return this._compatibility;
    }

    get isCompatible() {
        return this._isCompatible;
    }
}

export class AgentInstructionsModel {
    constructor(data) {
        /**
         * @type {string}
         * @private
         */
        this._systemInstruction = data.systemInstruction;
        /**
         * @type {string}
         * @private
         */
        this._userInstruction = data.userInstruction;
    }

    get systemInstruction() {
        return this._systemInstruction;
    }

    set systemInstruction(value) {
        this._systemInstruction = value;
    }

    get userInstruction() {
        return this._userInstruction;
    }

    set userInstruction(value) {
        this._userInstruction = value;
    }
}

export class ExtractionMethodModel {
    constructor(data) {
        /**
         * The extraction method name.
         * @type {string}
         * @private
         */
        this._method = data.method;
        /**
         * Whether to add missing namespaces to the generated SPARQL query.
         * @type {boolean}
         * @private
         */
        this._addMissingNamespaces = data.addMissingNamespaces;
        /**
         * The ontology graph used for the extraction method.
         * @type {string}
         * @private
         */
        this._ontologyGraph = data.ontologyGraph;
        /**
         * The construct query used for the extraction method.
         * @type {string}
         * @private
         */
        this._sparqlQuery = data.sparqlQuery;
        /**
         * The maximum number of triples per call for the extraction method.
         * @type {number}
         */
        this._maxNumberOfTriplesPerCall = data.maxNumberOfTriplesPerCall;
        /**
         * The similarity index used for the similarity extraction method.
         * @type {string}
         * @private
         */
        this._similarityIndex = data.similarityIndex;
        /**
         * The similarity threshold used for the similarity extraction method.
         * @type {number}
         * @private
         */
        this._similarityIndexThreshold = data.similarityIndexThreshold;
        /**
         * The query template used for the extraction method.
         * @type {string}
         * @private
         */
        this._queryTemplate = data.queryTemplate;
        /**
         * The retrieval connector instance used for the retrieval extraction method.
         * @type {string}
         * @private
         */
        this._retrievalConnectorInstance = data.retrievalConnectorInstance;
    }

    get method() {
        return this._method;
    }

    set method(value) {
        this._method = value;
    }

    get addMissingNamespaces() {
        return this._addMissingNamespaces;
    }

    set addMissingNamespaces(value) {
        this._addMissingNamespaces = value;
    }

    get sparqlQuery() {
        return this._sparqlQuery;
    }

    set sparqlQuery(value) {
        this._sparqlQuery = value;
    }

    get ontologyGraph() {
        return this._ontologyGraph;
    }

    set ontologyGraph(value) {
        this._ontologyGraph = value;
    }

    get maxNumberOfTriplesPerCall() {
        return this._maxNumberOfTriplesPerCall;
    }

    set maxNumberOfTriplesPerCall(value) {
        this._maxNumberOfTriplesPerCall = value;
    }

    get similarityIndex() {
        return this._similarityIndex;
    }

    set similarityIndex(value) {
        this._similarityIndex = value;
    }

    get similarityIndexThreshold() {
        return this._similarityIndexThreshold;
    }

    set similarityIndexThreshold(value) {
        this._similarityIndexThreshold = value;
    }

    get queryTemplate() {
        return this._queryTemplate;
    }

    set queryTemplate(value) {
        this._queryTemplate = value;
    }

    get retrievalConnectorInstance() {
        return this._retrievalConnectorInstance;
    }

    set retrievalConnectorInstance(value) {
        this._retrievalConnectorInstance = value;
    }
}

export class AdditionalExtractionMethodsModel {
    constructor(data) {
        /**
         * @type {AdditionalExtractionMethodModel[]}
         * @private
         */
        this._additionalExtractionMethods = data;
    }

    get additionalExtractionMethods() {
        return this._additionalExtractionMethods;
    }

    set additionalExtractionMethods(value) {
        this._additionalExtractionMethods = value;
    }
}

export class AdditionalExtractionMethodModel {
    constructor(data) {
        /**
         * @type {'iri_discovery_search' | 'autocomplete_iri_discovery_search'}
         * @private
         */
        this._method = data.method;
        /**
         * The maximum number of results per call for the extraction method.
         * @type {number}
         */
        this._maxNumberOfResultsPerCall = data.maxNumberOfResultsPerCall;
    }

    get method() {
        return this._method;
    }

    set method(value) {
        this._method = value;
    }

    get maxNumberOfResultsPerCall() {
        return this._maxNumberOfResultsPerCall;
    }

    set maxNumberOfResultsPerCall(value) {
        this._maxNumberOfResultsPerCall = value;
    }
}

export class AgentListModel {
    constructor(agents = []) {
        /**
         * @type {AgentModel[]}
         * @private
         */
        this._agents = agents;
        /**
         * Used to store the list of agents for filtering purposes.
         * @type {AgentModel[]}
         * @private
         */
        this._filterableAgents = cloneDeep(agents);

        this._agentNameByIdMap = {};
        this._initializeAgentNameByIdMap();
    }

    _initializeAgentNameByIdMap() {
        this._agentNameByIdMap = this._agents.reduce((map, agent) => {
            map[agent.id] = agent.name;
            return map;
        }, {});
    }

    isEmpty() {
        return this._agents.length === 0;
    }

    /**
     * Filters the agents in place by the repository ID property. This uses the private _filterableAgents property to do
     * the filtering without losing the original list.
     * There is a special case when the repository ID is equal to AGENTS_FILTER_ALL_KEY which means that all agents
     * should be shown.
     * @param {string} repositoryId - the repository ID to filter by
     */
    filterByRepository(repositoryId) {
        this._filterableAgents = this._agents.filter((agent) => {
            if (repositoryId === AGENTS_FILTER_ALL_KEY) {
                return true;
            } else if (agent.repositoryId === repositoryId) {
                return agent;
            }
        });
    }

    getAgent(agentId) {
        return this._agents.find((agent) => agent.id === agentId);
    }

    get agents() {
        return this._agents;
    }

    set agents(value) {
        this._agents = value;
    }

    get filterableAgents() {
        return this._filterableAgents;
    }

    set filterableAgents(value) {
        this._filterableAgents = value;
    }

    get agentNameByIdMap() {
        return cloneDeep(this._agentNameByIdMap);
    }

    set agentNameByIdMap(value) {
        this._agentNameByIdMap = value;
    }
}

export const ExtractionMethod = {
    FTS_SEARCH: 'fts_search',
    SPARQL: 'sparql_search',
    SIMILARITY: 'similarity_search',
    RETRIEVAL: 'retrieval_search'
};

export const AdditionalExtractionMethod = {
    IRI_DISCOVERY_SEARCH: 'iri_discovery_search',
    AUTOCOMPLETE_IRI_DISCOVERY_SEARCH: 'autocomplete_iri_discovery_search'
};

/**
 * A model used for the filter dropdown in the agent list.
 */
export class AgentListFilterModel {
    constructor(key, label, selected = false) {
        /**
         * @type {string}
         * @private
         */
        this._key = key;
        /**
         * @type {string}
         * @private
         */
        this._label = label;
        /**
         * Whether the filter is selected or not.
         * @type {boolean}
         * @private
         */
        this._selected = selected;
    }

    get key() {
        return this._key;
    }

    set key(value) {
        this._key = value;
    }

    get label() {
        return this._label;
    }

    set label(value) {
        this._label = value;
    }

    get selected() {
        return this._selected;
    }

    set selected(value) {
        this._selected = value;
    }
}

/**
 * Represents the compatibility status of an agent with the current version of the GraphDB.
 *
 * Compatibility is determined based on the versions of the agent and the GraphDB application.
 * For example, an agent created with a newer version of GraphDB may not be compatible
 * with an older version of the GraphDB due to differences in features or protocol changes.
 *
 * @type {{COMPATIBLE: string, INCOMPATIBLE: string}}
 */
export const AgentCompatibility = {
    /** The agent is compatible with the current version of the GraphDB. */
    'COMPATIBLE': 'COMPATIBLE',

    /**
     * The agent is incompatible with the current version of the GraphDB.
     * This may occur when the agent was created using a newer GraphDB version
     * than the one currently running.
     */
    'INCOMPATIBLE': 'INCOMPATIBLE'
};
