const { createAction } = require("redux-act");

const actions = {
    
    setLocalFeatureSets: createAction(
        "Set the list of local FeatureSets against the state for use by the applicaiton",
        featureSets => featureSets
    ),

    setLocalFeature: createAction(
        "Update the local feature entity in the list of state items",
        feature => feature
    ),

    removeLocalFeature: createAction(
        "Remove a feature from the state",
        featureId => featureId
    ),

    setLocalFeatures: createAction(
        "Set the list of local Features against the state for use by the applicaiton",
        features => features
    ),

    setLocalFeaturesForSet: createAction(
        "Set the list of local features belonging to a particular FeatureSet",
        (featureSetId, features) => ({ featureSetId, features })
    ),

    updateFeatureSet: createAction(
        "Update a FeatureSet entity from the server",
        featureSet => featureSet
    ),

    toggleFeatureSetVisibility: createAction(
        "Toggle the visibility state of the FeatureSet targeted by the passed ID",
        featureSetId => featureSetId
    ),

    setFeatureSetLabelVisible: createAction(
        "Set the visibility of the feature labels for the target FeatureSet ID",
        (featureSetId, visible) => ({ featureSetId, visible })
    ),

    setSelectedFeatureSet: createAction(
        "Specify the newly selected FeatureSet context by ID",
        featureSetId => featureSetId
    ),

    flagIsEditingFeature: createAction(
        "Flag that a feature is currently being edited",
        isEditingFeature => isEditingFeature
    ),

    updateFeatureState: createAction(
        "Updates a feature state in the application state",
        (featureId, stateChanges) => ({ featureId, stateChanges })
    ),

    flagFeatureAsSelected: createAction(
        "Flag or unflag a feature as being selected",
        (featureId, isSelected) => ({ featureId, isSelected })
    ),

    clearFeatureSelectedFlags: createAction(
        "Clear feature selected flags against all features in the state"
    ),

    flagFeatureSetHover: createAction(
        "Flag a feature set as being the context of a cursor hover",
        (featureSetId, isHoverContext) => ({ featureSetId, isHoverContext })
    )
}

module.exports = actions;
