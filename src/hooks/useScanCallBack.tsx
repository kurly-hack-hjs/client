import * as ConfirmAPI from '@apis/confirm'
import orderAtomFamily from '@recoil/order'
import { ScanParams, SCAN_STATUS, Snapshot } from '@src/types'
import { useRecoilCallback } from 'recoil'
import isLoadingAtom from '@recoil/global'

const useScanCallback = () =>
  useRecoilCallback(
    ({ set, snapshot }) =>
      async ({ orderId, imageUrl, loginId, tryCount }: ScanParams) => {
        const order = await snapshot.getPromise(orderAtomFamily(orderId))
        if (!order) return
        set(isLoadingAtom, true)
        try {
          const { foundItemsFromPicture, thisTurnSnapshot } = await ConfirmAPI.scan({
            orderId,
            imageUrl,
            loginId,
            tryCount,
          })
          const satisfied = thisTurnSnapshot.snapshots.every(item => item.scanStatus === SCAN_STATUS.complete)
          const newSnapshot: Snapshot = {
            orderId,
            tryCount,
            satisfied,
            itemList: thisTurnSnapshot.snapshots,
            foundedItem: foundItemsFromPicture,
          }
          set(orderAtomFamily(orderId), {
            ...order,
            snapshotList: [...order.snapshotList, newSnapshot],
          })
        } catch (e) {
          console.log(e)
        } finally {
          set(isLoadingAtom, false)
        }
      },
    [orderAtomFamily],
  )

export { useScanCallback }
