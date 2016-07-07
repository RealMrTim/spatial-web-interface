'use strict'

const { connect } = require("react-redux");

const fetchRemote = require("../../utilities/restClient");
const FeatureSetView = require("../../components.views/content/detail/FeatureSetView");

const mapActions = require("../../components.state/actions/mapActions");
const featureActions = require("../../components.state/actions/featureActions");
const layoutActions = require("../../components.state/actions/layoutActions");


const mapStateToProps = (state, ownProps) => {
    return {
        features: _.filter(state.features.items, (f) => f.featureSetId === ownProps.featureSet.id)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSelected: (set) => dispatch(featureActions.setSelectedFeatureSet(set.id)),
        onFeatureSelected: (featureId) => {
            dispatch(featureActions.clearFeatureSelectedFlags());
            dispatch(featureActions.flagFeatureAsSelected(featureId, true));
        },

        // When the user selects a feature that is already selected.
        onFeatureContext: () => {
            dispatch(layoutActions.setActiveDetailTab("feature"));
        },

        toggleFeatureSetVisible: (setId) => {
            dispatch(featureActions.toggleFeatureSetVisibility(setId));
        },

        onToggleFeatureLabelVisible: (setId) => {
            dispatch(featureActions.setFeatureSetLabelVisible(ownProps.featureSet.id, !ownProps.featureSet.labelsVisible));
        },

        onLocateFeatureSet: (setId) => {
            dispatch(mapActions.fitContentToView(setId, "featureSet"));
        },

        onMouseEnterContext: _.debounce((setId, isEntered) => dispatch(featureActions.flagFeatureSetHover(setId, isEntered)), 50)
    }
}

const FeatureSetContainer = connect(mapStateToProps, mapDispatchToProps)(FeatureSetView);
module.exports = FeatureSetContainer;