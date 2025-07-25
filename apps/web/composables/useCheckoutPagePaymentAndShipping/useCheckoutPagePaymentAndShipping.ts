import type { PaymentMethod, ShippingMethod } from '@plentymarkets/shop-api';
import { paymentProviderGetters, shippingProviderGetters } from '@plentymarkets/shop-api';
import { scrollToHTMLObject } from '~/utils/scollHelper';

const ID_SHIPPING_CHECKBOX = '#shipping-agreement-checkbox';

const getFallbackPaymentMethod = (
  paymentMethods: PaymentMethod[],
  selectedShippingMethod: ShippingMethod | undefined,
) => {
  return paymentMethods.find((method) => {
    return (
      !paymentProviderGetters.isPaymentMethodExcluded(selectedShippingMethod, method.id) &&
      !paymentProviderGetters.isPaymentMethodUnavailable(paymentMethods, method.id)
    );
  });
};

export const useCheckoutPagePaymentAndShipping = () => {
  const { $i18n } = useNuxtApp();
  const { send } = useNotification();
  const { getCart, data: cart } = useCart();
  const {
    loading: paymentLoading,
    data: paymentMethodData,
    fetchPaymentMethods,
    savePaymentMethod,
  } = usePaymentMethods();
  const { shippingPrivacyAgreement, setShippingPrivacyAgreement, setShippingPrivacyAgreementErrors } =
    useAdditionalInformation();

  const {
    loading: shippingLoading,
    data: shippingMethodData,
    selectedMethod: selectedShippingMethod,
    getShippingMethods,
    saveShippingMethod,
  } = useCartShippingMethods();

  const paymentMethods = computed(() => paymentMethodData.value);
  const shippingMethods = computed(() => shippingProviderGetters.getShippingProviders(shippingMethodData.value));
  const selectedPaymentId = computed(() => cart?.value?.methodOfPaymentId || 0);

  const handleShippingMethodUpdate = async (shippingMethodId: string) => {
    const existingShippingMethod = selectedShippingMethod.value
      ? shippingProviderGetters.getParcelServicePresetId(selectedShippingMethod.value)
      : null;

    if (existingShippingMethod === shippingMethodId) return;

    await saveShippingMethod(Number(shippingMethodId));
    usePreferredDelivery().disableAllOptions();
    await fetchPaymentMethods();
    await getCart();

    const isPaymentMethodExcluded = paymentProviderGetters.isPaymentMethodExcluded(
      selectedShippingMethod.value,
      selectedPaymentId.value,
    );

    const isPaymentMethodUnavailable = paymentProviderGetters.isPaymentMethodUnavailable(
      paymentMethods.value.list,
      selectedPaymentId.value,
    );

    if (isPaymentMethodExcluded || isPaymentMethodUnavailable) {
      send({ message: $i18n.t('billing.methodChanged'), type: 'warning' });

      const fallbackMethod = getFallbackPaymentMethod(paymentMethods.value.list, selectedShippingMethod.value);
      if (fallbackMethod) await savePaymentMethod(fallbackMethod.id);
    }

    setShippingPrivacyAgreement(false);
  };

  const handlePaymentMethodUpdate = async (paymentMethodId: number) => {
    await savePaymentMethod(paymentMethodId);
    await getShippingMethods();
    await getCart();
  };

  const validateShippingTerms = () => {
    const shouldAcceptAgreement = selectedShippingMethod.value
      ? shippingProviderGetters.getDataPrivacyAgreementHint(selectedShippingMethod.value)
      : false;

    if (shouldAcceptAgreement) {
      setShippingPrivacyAgreementErrors(!shippingPrivacyAgreement.value);
      if (!shippingPrivacyAgreement.value) scrollToHTMLObject(ID_SHIPPING_CHECKBOX);
    }

    return shouldAcceptAgreement ? shippingPrivacyAgreement.value : true;
  };

  return {
    paymentLoading,
    shippingLoading,
    paymentMethods,
    shippingMethods,
    selectedPaymentId,
    handleShippingMethodUpdate,
    handlePaymentMethodUpdate,
    validateShippingTerms,
  };
};
