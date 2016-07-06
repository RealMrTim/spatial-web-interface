const { createAction } = require("redux-act");

const actions = {
    
    setLocalFeatureSets: createAction(
        "Set the list of local FeatureSets against the state for use by the applicaiton",
        featureSets => featureSets
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

    setFeatureSetActionState: createAction(
        "Sets the current action state being used in the context of the selected FeatureSet",
        actionState => actionState
    ),

    flagFeatureAsModified: createAction(
        "Flags a Feature as had having modifications",
        (featureId, newGeometry) => ({ featureId, newGeometry })
    ),

    // TODO: redo
    clearModifiedFeatures: createAction(
        "Clears the list of Features that are flagged as modified"
    ),

    flagFeatureAsSelected: createAction(
        "Flag or unflag a feature as being selected",
        (featureId, isSelected) => ({ featureId, isSelected })
    ),

    flagFeatureSetHover: createAction(
        "Flag a feature set as being the context of a cursor hover",
        (featureSetId, isHoverContext) => ({ featureSetId, isHoverContext })
    )
}

module.exports = actions;
