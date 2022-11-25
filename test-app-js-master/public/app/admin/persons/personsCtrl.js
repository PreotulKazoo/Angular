angular.module('taxes-app').controller('personsCtrl', personsCtrl);
personsCtrl.$inject = ['$scope', '$loading', '$localStorage', '$uibModal', 'dialogs', 'toastr', 'personsModel', 'utils'];
function personsCtrl($scope, $loading, $localStorage, $uibModal, dialogs, toastr, personsModel, utils) {
  "use strict";
  let vm = this;

  vm.limit = {max: parseInt(window.innerHeight / 20)};
  vm.changeMaxLimit = utils.changeMaxLimit;

  let load = () => {
    $loading.start(`loading-container`);
    personsModel.simple.query().$promise.then(resp => {
      vm.data = resp;
      $loading.finish(`loading-container`);
      $(window).trigger('resize');
    }).catch(() => {toastr.error(`Eroare la preluarea datelor!!!!!!!!!!!!!!!!`);});
  };
  load();

  $(window).resize(() => {
    vm.limit = {max: parseInt(window.innerHeight / 20)};
    utils.setHeight('view', 40, 'maxHeight');
		utils.setHeight('scroll', 40, 'maxHeight');
  });

  // vm.add = () => {
  //   $uibModal.open({
  //     templateUrl: 'app/admin/information/informationModal/informationModal',
  //     controller: 'informationModalCtrl',
  //     controllerAs: 'mm',
  //     size: 'sm',
  //     resolve: {id_info: () => null}
  //   }).result.then(() => load()).catch(() => null);
  // };

  // vm.edit = id => {
  //   $uibModal.open({
  //     templateUrl: 'app/admin/information/informationModal/informationModal',
  //     controller: 'informationModalCtrl',
  //     controllerAs: 'mm',
  //     size: 'sm',
  //     resolve: {id_info: () => id}
  //   }).result.then(()=>load()).catch(()=>null);
  // };

  // vm.remove = ob => {
  //   dialogs.confirm(`Confirmă ștergerea`, `Doriți să ștergeți rândul?`).result.then(() => {
  //     $loading.start(`loading-container`);
  //     personsModel.byId.remove({id: ob.id}).$promise.then(() => {
  //       $loading.finish(`loading-container`);
  //       toastr.success(`Rândul a fost șters!`);
  //       load();
  //     }).catch(() => toastr.error(`Eroare la ștergere`));
  //   }).catch(() => null);
  // };
}
