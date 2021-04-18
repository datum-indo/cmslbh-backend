import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasePelakuOrderByInput } from "../../../inputs/CasePelakuOrderByInput";
import { CasePelakuWhereInput } from "../../../inputs/CasePelakuWhereInput";
import { CasePelakuWhereUniqueInput } from "../../../inputs/CasePelakuWhereUniqueInput";
import { CasePelakuScalarFieldEnum } from "../../../../enums/CasePelakuScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCasePelakuArgs {
  @TypeGraphQL.Field(_type => CasePelakuWhereInput, {
    nullable: true
  })
  where?: CasePelakuWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuOrderByInput], {
    nullable: true
  })
  orderBy?: CasePelakuOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CasePelakuWhereUniqueInput, {
    nullable: true
  })
  cursor?: CasePelakuWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "jenisPelaku" | "case_id" | "person_id"> | undefined;
}
