import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferCreateOrConnectWithoutCaseInput } from "../inputs/CaseTransferCreateOrConnectWithoutCaseInput";
import { CaseTransferCreateWithoutCaseInput } from "../inputs/CaseTransferCreateWithoutCaseInput";
import { CaseTransferUpdateWithoutCaseInput } from "../inputs/CaseTransferUpdateWithoutCaseInput";
import { CaseTransferUpsertWithoutCaseInput } from "../inputs/CaseTransferUpsertWithoutCaseInput";
import { CaseTransferWhereUniqueInput } from "../inputs/CaseTransferWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferUpdateOneWithoutCaseInput {
  @TypeGraphQL.Field(_type => CaseTransferCreateWithoutCaseInput, {
    nullable: true
  })
  create?: CaseTransferCreateWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseTransferCreateOrConnectWithoutCaseInput, {
    nullable: true
  })
  connectOrCreate?: CaseTransferCreateOrConnectWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseTransferUpsertWithoutCaseInput, {
    nullable: true
  })
  upsert?: CaseTransferUpsertWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseTransferWhereUniqueInput, {
    nullable: true
  })
  connect?: CaseTransferWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CaseTransferUpdateWithoutCaseInput, {
    nullable: true
  })
  update?: CaseTransferUpdateWithoutCaseInput | undefined;
}
